/*
Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

Example 1:
Input: num = 38
Output: 2
Explanation: The process is
38 --> 3 + 8 --> 11
11 --> 1 + 1 --> 2 
Since 2 has only one digit, return it.

Example 2:
Input: num = 0
Output: 0
 

Constraints:
0 <= num <= 2^31 - 1

Follow up: Could you do it without any loop/recursion in O(1) runtime?
*/

function addDigits(num: number): number {
    return 1 + ((num - 1) % 9)
}

function _addDigits(num: number): number {
    while (num >= 10) {
        const a = Math.floor(num / 10)
        const b = num % 10
        num = a + b
    }
    return num
}

function __addDigits(num: number): number {
    let total = 0
    while (num > 0) {
        total += num % 10
        num = Math.floor(num / 10)
        if (num == 0) {
            if (total <= 9) {
                return total
            }
            num = total
            total = 0
        }
    }
    return total
}
