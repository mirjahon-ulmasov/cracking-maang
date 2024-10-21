/*
You are given an array nums of non-negative integers. nums is considered special if there exists a number x such that there are exactly x numbers in nums that are greater than or equal to x.

Notice that x does not have to be an element in nums.

Return x if the array is special, otherwise, return -1. It can be proven that if nums is special, the value for x is unique.

Example 1:
Input: nums = [3,5]
Output: 2
Explanation: There are 2 values (3 and 5) that are greater than or equal to 2.

Example 2:
Input: nums = [0,0]
Output: -1
Explanation: No numbers fit the criteria for x.
If x = 0, there should be 0 numbers >= x, but there are 2.
If x = 1, there should be 1 number >= x, but there are 0.
If x = 2, there should be 2 numbers >= x, but there are 0.
x cannot be greater since there are only 2 numbers in nums.

Example 3:
Input: nums = [0,4,3,0,4]
Output: 3
Explanation: There are 3 values that are greater than or equal to 3.

Constraints:
1 <= nums.length <= 100
0 <= nums[i] <= 1000
*/

// Time: O(n^2) Space: O(1)
function specialArray(nums: number[]): number {
    for (let i = nums.length; i >= 0; i--) {
        let count = i
        for (let j = 0; j <= nums.length; j++) {
            if (nums[j] >= i) count--
        }
        if (count == 0) return i
    }
    return -1
}

// Time: O(n) Space: O(n)
function specialArray2(nums: number[]): number {
    const arr = new Array(nums.length + 1).fill(0)
    let result = 0
    for (let num of nums) {
        const index = Math.min(nums.length, num)
        arr[index] += 1
    }
    for (let i = arr.length - 1; i > 0; i--) {
        result += arr[i]
        if (i == result) return result
    }
    return -1
}
