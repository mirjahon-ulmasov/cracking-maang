/*
Given a positive integer n, find the smallest integer which has exactly the same digits existing in the integer n and is greater in value than n. If no such positive integer exists, return -1.

Note that the returned integer should fit in 32-bit integer, if there is a valid answer but it does not fit in 32-bit integer, return -1.

Example 1:
Input: n = 12
Output: 21

Example 2:
Input: n = 21
Output: -1
*/

/*
At first, lets look at the edge cases -

1) If all digits sorted in descending order, then output is always “Not Possible”. For example, 4321.
2) If all digits are sorted in ascending order, then we need to swap last two digits. For example, 1234.
3) For other cases, we need to process the number from rightmost side (why? because we need to find the smallest of all greater numbers)

I) Start from the right most digit and find the first digit 
   that is smaller than the digit next to it. [5,3,|4|,9,7,6]

   If no such digit is found, its the edge case 1.

II) Find the smallest digit on right side of (i-1)'th digit that is greater than number[i-1]

III) Swap the above found smallest digit with number[i-1]

IV) Sort the digits after (i-1) in ascending order
*/

function nextGreaterElement(n: number): number {
    let result = String(n).split("").map(Number)
    const N = result.length
    let firstSmallIdx = 0
    for (let i = N - 1; i > 0; i--) {
        if (result[i] > result[i - 1]) {
            firstSmallIdx = i - 1
            break
        }
    }
    if (firstSmallIdx == -1) return -1

    let smallestNum = Infinity
    let smallestIdx = firstSmallIdx
    for (let i = N - 1; i > firstSmallIdx; i--) {
        if (result[i] > result[firstSmallIdx] && smallestNum > result[i]) {
            smallestNum = result[i]
            smallestIdx = i
        }
    }
    const temp = result[firstSmallIdx]
    result[firstSmallIdx] = result[smallestIdx]
    result[smallestIdx] = temp

    for (let i = firstSmallIdx + 1, j = N - 1; i < j; i++, j--) {
        const temp = result[i]
        result[i] = result[j]
        result[j] = temp
    }

    const finalNum = Number(result.join(''))
    
    if (finalNum > 2 ** 31 - 1 || finalNum <= n) return -1
    return finalNum
}

function _nextGreaterElement(n: number): number {
    let result = []
    let num = n
    while (num > 0) {
        result.unshift(num % 10)
        num = Math.floor(num / 10)
    }
    let idx = 0
    for (let i = result.length - 1; i > 0; i--) {
        if (result[i] > result[i - 1]) {
            idx = i - 1
            break
        }
    }
    let smallestLargeNum = Infinity
    let numIdx = 0
    for (let i = result.length - 1; i > idx; i--) {
        if (result[i] > result[idx] && smallestLargeNum > result[i]) {
            smallestLargeNum = result[i]
            numIdx = i
        }
    }
    const temp = result[idx]
    result[idx] = result[numIdx]
    result[numIdx] = temp

    const left = result.slice(0, idx + 1)
    const right = result.slice(idx + 1)
    right.sort()
    result = left.concat(right)

    let inc = 1
    let finalNum = 0
    for (let i = result.length - 1; i >= 0; i--) {
        finalNum = finalNum + result[i] * inc
        inc *= 10
    }
    if (finalNum > 2 ** 31 - 1 || finalNum <= n) {
        return -1
    }
    return finalNum
}
