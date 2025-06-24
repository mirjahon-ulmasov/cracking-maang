/*
Given an integer array nums and an integer k, split nums into k non-empty subarrays such that the largest sum of any subarray is minimized.

Return the minimized largest sum of the split.

A subarray is a contiguous part of the array.

Example 1:
Input: nums = [7,2,5,10,8], k = 2
Output: 18
Explanation: There are four ways to split nums into two subarrays.
The best way is to split it into [7,2,5] and [10,8], where the largest sum among the two subarrays is only 18.

Example 2:
Input: nums = [1,2,3,4,5], k = 2
Output: 9
Explanation: There are four ways to split nums into two subarrays.
The best way is to split it into [1,2,3] and [4,5], where the largest sum among the two subarrays is only 9.
*/

function splitArray(nums: number[], k: number): number {
    let L = Math.max(...nums)
    let R = nums.reduce((acc, cur) => acc + cur)
    let result = R
    while (L <= R) {
        const M = Math.floor((L + R) / 2)
        let count = 1, sum = 0
        for (let i = 0; i < nums.length; i++) {
            sum += nums[i]
            if (sum > M) {
                count++
                sum = nums[i]
                if (count > k) break
            }
        }

        if (count > k) {
            L = M + 1
        } else {
            result = M
            R = M - 1
        }
    }
    return result
};