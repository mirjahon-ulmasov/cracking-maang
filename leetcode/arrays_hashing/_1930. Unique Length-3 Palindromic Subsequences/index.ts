/*
Given a string s, return the number of unique palindromes of length three that are a subsequence of s.

Note that even if there are multiple ways to obtain the same subsequence, it is still only counted once.

A palindrome is a string that reads the same forwards and backwards.

A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

For example, "ace" is a subsequence of "abcde".

Example 1:
Input: s = "aabca"
Output: 3
Explanation: The 3 palindromic subsequences of length 3 are:
- "aba" (subsequence of "aabca")
- "aaa" (subsequence of "aabca")
- "aca" (subsequence of "aabca")

Example 2:
Input: s = "adc"
Output: 0
Explanation: There are no palindromic subsequences of length 3 in "adc".

Example 3:
Input: s = "bbcbaba"
Output: 4
Explanation: The 4 palindromic subsequences of length 3 are:
- "bbb" (subsequence of "bbcbaba")
- "bcb" (subsequence of "bbcbaba")
- "bab" (subsequence of "bbcbaba")
- "aba" (subsequence of "bbcbaba")
 
Constraints:
3 <= s.length <= 10^5
s consists of only lowercase English letters.
*/

// Not fully correct, when c appears before 2 a, it counts as aca
function countPalindromicSubsequence(s: string): number {
    const chars = new Map<string, number>() // 28 alphabet
    const palindromes = new Set<string>()
    for (const char of s) {
        if (chars.has(char)) {
            chars.forEach((value, key) => {
                if ((key == char && value > 1) || key != char) {
                    palindromes.add(char + key + char)
                }
            })
        }
        chars.set(char, (chars.get(char) || 0) + 1)
    }
    console.log(palindromes)
    return palindromes.size
}

// Similar to previous solution, but here we use for right side Hashmap, for left side Set,
// When we loop string, char will count as middle of palindrome, and we check if there
// is same char in left and right side for palindrome, if yes we add. 
function countPalindromicSubsequence2(s: string): number {
    const right = new Map<string, number>()
    const left = new Set<string>()
    const palindromes = new Set<string>()

    for (const char of s) {
        right.set(char, (right.get(char) || 0) + 1)
    }
    for (const char of s) {
        right.set(char, (right.get(char) as number) - 1)
        left.forEach(value => {
            if ((right.get(value) || 0) > 0) {
                palindromes.add(value + char + value)               
            }
        })
        left.add(char)
    }    
    return palindromes.size
}

console.log(countPalindromicSubsequence2("aabca")) // aba aaa aca
console.log(countPalindromicSubsequence2("adc"))
console.log(countPalindromicSubsequence2("bbcbaba")) // bbb bcb bab aba
