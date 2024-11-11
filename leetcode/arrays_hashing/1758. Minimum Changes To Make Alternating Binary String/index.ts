/*
You are given a string s consisting only of the characters '0' and '1'. In one operation, you can change any '0' to '1' or vice versa.

The string is called alternating if no two adjacent characters are equal. For example, the string "010" is alternating, while the string "0100" is not.

Return the minimum number of operations needed to make s alternating.

Example 1:
Input: s = "0100"
Output: 1
Explanation: If you change the last character to '1', s will be "0101", which is alternating.

Example 2:
Input: s = "10"
Output: 0
Explanation: s is already alternating.

Example 3:
Input: s = "1111"
Output: 2
Explanation: You need two operations to reach "0101" or "1010".
*/

// -------------------------------------------------
function _minOperations(s: string): number {
    let count1 = 0
    let count2 = 0
    const arr = s.split("")
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i + 1]) {
            arr[i + 1] = arr[i + 1] == "1" ? "0" : "1"
            count1++
        }
    }
    count2 = arr.length - count1
    return count2 > count1 ? count1 : count2
}

// -------------------------------------------------
// Each string has only 2 options to make alternating: 01010 or 10101
// If our string is 10010, we need 2 operations to make 010101, and 3 operations to make 10101.
// So, if we found how many operation takes in first one, second one can be found using this formula
// (length of string - count of first operations)
// So, we takes one operation for example 10101, and compare each characters of string if in odd index char is '1', if no then count++, same stuff in even index with '0'   

function _minOperations2(s: string): number {
    let count = 0
    for (let i = 0; i < s.length; i++) {
        if (i % 2 == 1) {
            count = count + (s.charAt(i) == '0' ? 1 : 0)
        } else {
            count = count + (s.charAt(i) == '1' ? 1 : 0)
        }
    }
    return s.length - count > count ? count : s.length - count
}

console.log(_minOperations("1111"))
console.log(_minOperations("10010100"))