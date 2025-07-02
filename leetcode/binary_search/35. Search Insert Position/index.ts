/*
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [1,3,5,6], target = 5
Output: 2

Example 2:
Input: nums = [1,3,5,6], target = 2
Output: 1

Example 3:
Input: nums = [1,3,5,6], target = 7
Output: 4
*/

function searchInsert(nums: number[], target: number): number {
    let L = 0, R = nums.length - 1
    while (L <= R) {
        const M = Math.floor((L + R) / 2)
        if (nums[M] > target) R = M - 1
        else if (nums[M] < target) L = M + 1
        else return M
    }
    return L
};