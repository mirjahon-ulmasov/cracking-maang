/*
Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

A string is represented by an array if the array elements concatenated in order forms the string.

Example 1:
Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
Output: true
Explanation:
word1 represents string "ab" + "c" -> "abc"
word2 represents string "a" + "bc" -> "abc"
The strings are the same, so return true.

Example 2:
Input: word1 = ["a", "cb"], word2 = ["ab", "c"]
Output: false

Example 3:
Input: word1  = ["abc", "d", "defg"], word2 = ["abcddefg"]
Output: true
*/

// Time: O(n) Space: O(1)
function arrayStringsAreEqual(word1: string[], word2: string[]): boolean {
    let w1 = 0, w2 = 0
    let i = 0, j = 0
    while (w1 < word1.length && w2 < word2.length) {
        if (word1[w1][i] != word2[w2][j]) {
            return false
        }
        i++
        j++
        if (i == word1[w1].length) {
            i = 0
            w1 += 1
        }
        if (j == word2[w2].length) {
            j = 0
            w2 += 1
        }
    }
    if (w1 != word1.length || w2 != word2.length) {
        return false
    }
    return true
};

// Time: O(n) Space: O(n)
function _arrayStringsAreEqual(word1: string[], word2: string[]): boolean {
    return word1.join('') == word2.join('')
};