/*
Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.

Example 1:
Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").

Example 2:
Input: s1 = "ab", s2 = "eidboaoo"
Output: false
*/

function checkInclusion(s1: string, s2: string): boolean {
    if (s1.length > s2.length) return false
    const s1Array = new Array(26).fill(0), s2Array = new Array(26).fill(0)
    const N1 = s1.length, N2 = s2.length
    const aIdx = 'a'.charCodeAt(0)
    for (let i = 0; i < N1; i++) {
        s1Array[s1[i].charCodeAt(0) - aIdx]++
        s2Array[s2[i].charCodeAt(0) - aIdx]++
    }
    let matches = 0
    for (let i = 0; i < 26; i++) {
        if (s1Array[i] == s2Array[i]) matches++
    }

    for (let i = N1; i < N2; i++) {
        if (matches == 26) return true

        let removedIdx = s2[i - N1].charCodeAt(0) - aIdx
        let addIdx = s2[i].charCodeAt(0) - aIdx

        s2Array[removedIdx]--
        if (s2Array[removedIdx] == s1Array[removedIdx]) matches++
        else if (s2Array[removedIdx] + 1 == s1Array[removedIdx]) matches--

        s2Array[addIdx]++
        if (s2Array[addIdx] == s1Array[addIdx]) matches++
        else if (s2Array[addIdx] - 1 == s1Array[addIdx]) matches--
    }

    return matches == 26
};