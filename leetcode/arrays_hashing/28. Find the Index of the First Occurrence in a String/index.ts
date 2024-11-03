/*
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:
Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.

Example 2:
Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.
*/

function strStr(haystack: string, needle: string): number {
    for (let i = 0, j = needle.length; j <= haystack.length; i++, j++) {
        if (haystack.slice(i, j) == needle) {
            return i
        }
    }
    return -1
}

function strStr2(haystack: string, needle: string): number {
    return haystack.trim().indexOf(needle)
}
