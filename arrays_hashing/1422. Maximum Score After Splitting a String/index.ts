/*
Given a string s of zeros and ones, return the maximum score after splitting the string into two non-empty substrings (i.e. left substring and right substring).

The score after splitting a string is the number of zeros in the left substring plus the number of ones in the right substring.

Example 1:
Input: s = "011101"
Output: 5 
Explanation: 
All possible ways of splitting s into two non-empty substrings are:
left = "0" and right = "11101", score = 1 + 4 = 5 
left = "01" and right = "1101", score = 1 + 3 = 4 
left = "011" and right = "101", score = 1 + 2 = 3 
left = "0111" and right = "01", score = 1 + 1 = 2 
left = "01110" and right = "1", score = 2 + 1 = 3

Example 2:
Input: s = "00111"
Output: 5
Explanation: When left = "00" and right = "111", we get the maximum score = 2 + 3 = 5

Example 3:
Input: s = "1111"
Output: 3
*/

// ---------------------------------------------
function maxScore(s: string): number {
    let left = 0,
        right = 0
    for (let i = 0; i < s.length; i++) {
        let leftSide = computeSum(s.substring(0, i), "0")
        let rightSide = computeSum(s.substring(i), "1")
        if (left < leftSide) left = leftSide
        if (right < rightSide) right = rightSide
    }
    console.log(left, right);
    
    return left + right
}

function computeSum(str: string, num: string) {
    let result = 0
    for (let s of str) {
        if (s == num) {
            result++
        }
    }
    return result
}

// ---------------------------------------------
function maxScore2(s: string): number {
    let left = 0, right = 0, result = 0
    for (let num of s) {
        if (num == '1') right++
    }
    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] == '0') left++
        else right--

        if (left + right > result) {
            result = left + right
        }
    }
    return result
};

console.log(maxScore("011101"))
