/*
Given a string s, return the length of the longest substring between two equal characters, excluding the two characters. If there is no such substring return -1.

A substring is a contiguous sequence of characters within a string.

Example 1:
Input: s = "aa"
Output: 0
Explanation: The optimal substring here is an empty substring between the two 'a's.

Example 2:
Input: s = "abca"
Output: 2
Explanation: The optimal substring here is "bc".

Example 3:
Input: s = "cbzxy"
Output: -1
Explanation: There are no characters that appear twice in s.
*/

function maxLengthBetweenEqualCharacters(s: string): number {
    let length = -1
    const map = new Map()
    for (let i = 0; i < s.length; i++) {
        if (map.has(s.charAt(i))) {
            const len = (i - map.get(s.charAt(i))) - 1
            if (len > length) {
                length = len
            }
        } else {
            map.set(s.charAt(i), i)
        }
    }
    return length
}

console.log(maxLengthBetweenEqualCharacters("abca"));
console.log(maxLengthBetweenEqualCharacters("aa"));
console.log(maxLengthBetweenEqualCharacters("cbzxy"));
console.log(maxLengthBetweenEqualCharacters("acdbeabc"));

