/*
Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

Example 1:
Input: s = "abciiidef", k = 3
Output: 3
Explanation: The substring "iii" contains 3 vowel letters.

Example 2:
Input: s = "aeiou", k = 2
Output: 2
Explanation: Any substring of length 2 contains 2 vowels.

Example 3:
Input: s = "leetcode", k = 3
Output: 2
Explanation: "lee", "eet" and "ode" contain 2 vowels.
*/

function maxVowels(s: string, k: number): number {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u'])
    let count = 0, maxCount = 0
    for (let i = 0; i < k; i++) {
        if (vowels.has(s[i])) count++
    }
    maxCount = count
    for (let i = k; i < s.length; i++) {
        if (maxCount == k) return k

        if (vowels.has(s[i - k])) count--
        if (vowels.has(s[i])) count++

        maxCount = Math.max(maxCount, count)
    }
    return maxCount
};