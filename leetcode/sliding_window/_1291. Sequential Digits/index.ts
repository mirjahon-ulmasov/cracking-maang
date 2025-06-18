/*
An integer has sequential digits if and only if each digit in the number is one more than the previous digit.
Return a sorted list of all the integers in the range [low, high] inclusive that have sequential digits.

Example 1:
Input: low = 100, high = 300
Output: [123,234]

Example 2:
Input: low = 1000, high = 13000
Output: [1234,2345,3456,4567,5678,6789,12345]
 
Constraints:
10 <= low <= high <= 10^9
*/

function sequentialDigits(low: number, high: number): number[] {
    const digits = '123456789'
    const result = []
    for (let i = 2; i <= 9; i++) {
        for (let j = 0; j <= 9 - i; j++) {
            const num = Number(digits.slice(j, j + i))
            if (num > high) return result
            if (num < low) continue
            result.push(num)
        }
    }
    return result
};