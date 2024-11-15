/*
Given a string s, find the length of the maxLength substring without repeating characters.

Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

function lengthOfLongestSubstring(s: string): number {
    let maxLength = 0, left = 0
    const set = new Set()
    for (let right = 0; right < s.length; right++) {
        while (set.has(s[right])) {
            set.delete(s[left])
            left++
        }
        set.add(s[right])
        maxLength = Math.max(maxLength, set.size) // set.size == right - left + 1
    }
    return maxLength
};

function _lengthOfLongestSubstring(s: string): number {
    let maxLength = 0
    const set = new Set()
    for (let i = 0; i < s.length; i++) {
        if (set.has(s[i])) {
            maxLength = Math.max(maxLength, set.size)
            set.clear()

            let j = i - 1
            while (s[j] != s[i]) {
                set.add(s[j])
                j--
            }
        }
        set.add(s[i])
    }
    maxLength = Math.max(maxLength, set.size)
    return maxLength
}
