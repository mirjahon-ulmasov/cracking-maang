/*
Given a string s, find two disjoint palindromic subsequences of s such that the product of their lengths is maximized. The two subsequences are disjoint if they do not both pick a character at the same index.

Return the maximum possible product of the lengths of the two palindromic subsequences.

A subsequence is a string that can be derived from another string by deleting some or no characters without changing the order of the remaining characters. A string is palindromic if it reads the same forward and backward.

Example 1:
example-1
Input: s = "leetcodecom"
Output: 9
Explanation: An optimal solution is to choose "ete" for the 1st subsequence and "cdc" for the 2nd subsequence.
The product of their lengths is: 3 * 3 = 9.

Example 2:
Input: s = "bb"
Output: 1
Explanation: An optimal solution is to choose "b" (the first character) for the 1st subsequence and "b" (the second character) for the 2nd subsequence.
The product of their lengths is: 1 * 1 = 1.

Example 3:
Input: s = "accbcaxxcxx"
Output: 25
Explanation: An optimal solution is to choose "accca" for the 1st subsequence and "xxcxx" for the 2nd subsequence.
The product of their lengths is: 5 * 5 = 25.
*/

// Space Complexity: O(2^n)
// Time Complexity: O(2^n * n + (2^n)^2)
// 1) Generating all subsequences and checking for palindromes takes: O(2^n * n)
// 2) Checking pairs for disjointness takes: O((2^n)^2)
function maxProduct(s: string): number {
    const palindromic = new Map() // bitmask: length
    const N = s.length
    let result = 0

    for (let mask = 1; mask < 1 << N; mask++) { // 1 << N == 2 ^ N        
        let subseq = ""
        for (let i = 0; i < N; i++) {
            if (mask & (1 << i)) {
                subseq += s[i]
            }
        } 
        if (isPalindrome(subseq)) {
            palindromic.set(mask, subseq.length)
        }
    }
    palindromic.forEach((v1, k1) => {
        palindromic.forEach((v2, k2) => {
            if((k1 & k2) == 0) {
                result = Math.max(result, v1 * v2)
            }
        })
    })
    return result
}

function isPalindrome(s: string) {
    let left = 0, right = s.length - 1
    while (left < right) {
        if (s[left++] != s[right--]) {
            return false
        }
    }
    return true
}

console.log(maxProduct("abacdc"));
console.log(maxProduct("leetcodecom"));
console.log(maxProduct("bb"));
console.log(maxProduct("accbcaxxcxx"));