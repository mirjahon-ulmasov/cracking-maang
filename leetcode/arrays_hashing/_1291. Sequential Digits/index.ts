/*
An integer has sequential digits if and only if each digit in the number is one more than the previous digit.

Return a sorted list of all the integers in the range [low, high] inclusive that have sequential digits.

Example 1:
Input: low = 100, high = 300
Output: [123,234]

Example 2:
Input: low = 1000, high = 13000
Output: [1234,2345,3456,4567,5678,6789,12345]
*/

function sequentialDigits(low: number, high: number): number[] {
    const str = "123456789"
    const result = []
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < str.length - i; j++) {
            const num = Number(str.slice(j, j + i + 1))
            if (num >= low && num <= high) {
                result.push(num)
            }
        }
    }
    return result
}