/*
Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.

Example 1:
Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

Example 2:
Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.

Example 3:
Input: s = "a", t = "aa"
Output: ""
Explanation: Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.
*/

function minWindow(s: string, t: string): string {
    const tMap = new Map<string, number>()
    const window = new Map<string, number>()

    for (let char of t) {
        tMap.set(char, (tMap.get(char) || 0) + 1)
    }
    const target = tMap.size
    let L = 0, matches = 0, result = "", resultSize = Infinity
    for (let R = 0; R < s.length; R++) {
        if (tMap.has(s[R])) {
            window.set(s[R], (window.get(s[R]) || 0) + 1)

            if (tMap.get(s[R]) == window.get(s[R])) {
                matches++
            }
        }
        while (matches >= target) {
            if (resultSize > R + 1 - L) {
                result = s.slice(L, R + 1)
                resultSize = R + 1 - L
            }
            if (tMap.has(s[L])) {
                window.set(s[L], window.get(s[L])! - 1)

                if (tMap.get(s[L])! > window.get(s[L])!) {
                    matches--
                }
            }
            L++
        }
    }
    return result
};