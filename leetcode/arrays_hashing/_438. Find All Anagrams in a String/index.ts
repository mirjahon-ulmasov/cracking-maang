/*
Given two strings s and p, return an array of all the start indices of p's 
anagrams in s. You may return the answer in any order.

Example 1:
Input: s = "cbaebabacd", p = "abc"
Output: [0,6]
Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".

Example 2:
Input: s = "abab", p = "ab"
Output: [0,1,2]
Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".
*/

function findAnagrams(s: string, p: string): number[] {
    if (s.length < p.length) return []
    const sCount = new Array(26).fill(0)
    const pCount = new Array(26).fill(0)
    const aIdx = 'a'.charCodeAt(0)
    let matches = 0
    for (let i = 0; i < p.length; i++) {
        sCount[s[i].charCodeAt(0) - aIdx]++
        pCount[p[i].charCodeAt(0) - aIdx]++
    }

    for (let i = 0; i < 26; i++) {
        if (sCount[i] == pCount[i]) {
            matches++
        }
    }

    const result: number[] = []
    for (let i = p.length; i < s.length; i++) {
        if (matches == 26) {
            result.push(i - p.length)
        }

        const removedIdx = s[i - p.length].charCodeAt(0) - aIdx
        sCount[removedIdx]--
        if (sCount[removedIdx] == pCount[removedIdx]) matches++
        else if (sCount[removedIdx] + 1 == pCount[removedIdx]) matches--

        const addedIdx = s[i].charCodeAt(0) - aIdx
        sCount[addedIdx]++
        if (sCount[addedIdx] == pCount[addedIdx]) matches++
        if (sCount[addedIdx] - 1 == pCount[addedIdx]) matches--
    }

    if (matches == 26) {
        result.push(s.length - p.length)
    };

    return result
}

// Brute force approach
function _findAnagrams(s: string, p: string): number[] {
    const pMap = new Map()
    const sMap = new Map()
    const result = []
    for (let i = 0; i < p.length; i++) {
        pMap.set(p.charAt(i), (pMap.get(p.charAt(i)) || 0) + 1)
        sMap.set(s.charAt(i), (sMap.get(s.charAt(i)) || 0) + 1)
    }
    for (let i = 0, j = p.length; j <= s.length; i++, j++) {
        let isAnagram = true
        sMap.forEach((value, key) => {
            if ((pMap.get(key) || 0) != value) {
                isAnagram = false
                return
            }
        })
        if (isAnagram) {
            result.push(i)
        }
        sMap.set(s[i], sMap.get(s[i]) - 1)
        sMap.set(s[j], (sMap.get(s[j]) || 0) + 1)
    }
    return result
}

console.log(findAnagrams("cbaebabacd", "abc"))
console.log(findAnagrams("abab", "ab"))
