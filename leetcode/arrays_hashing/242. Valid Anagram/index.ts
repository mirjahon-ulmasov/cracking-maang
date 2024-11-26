/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false


Constraints:
1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 
Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
*/

function isAnagram(s: string, t: string): boolean {
    if (s.length != t.length) return false
    const sMap = new Map()
    for (let i = 0; i < s.length; i++) {
        sMap.set(s[i], (sMap.get(s[i]) || 0) + 1)
    }
    for (let char of t) {
        const count = sMap.get(char) || 0
        if (count < 1) return false
        sMap.set(char, count - 1)
    }
    return true
}