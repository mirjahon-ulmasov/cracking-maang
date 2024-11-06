/*
Given an array nums with n integers, your task is to check if it could become non-decreasing by modifying at most one element.

We define an array is non-decreasing if nums[i] <= nums[i + 1] holds for every i (0-based) such that (0 <= i <= n - 2).

Example 1:
Input: nums = [4,2,3]
Output: true
Explanation: You could modify the first 4 to 1 to get a non-decreasing array.
Example 2:

Input: nums = [4,2,1]
Output: false
Explanation: You cannot get a non-decreasing array by modifying at most one element.
*/

function checkPossibility(nums: number[]): boolean {
    let modified = false
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] <= nums[i + 1]) continue
        if (modified) return false

        if (i == 0 || nums[i + 1] >= nums[i - 1]) {
            nums[i] = nums[i + 1]
        } else {
            nums[i + 1] = nums[i]
        }
        modified = true
    }
    return true
}
