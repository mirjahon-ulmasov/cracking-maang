/*
Given a 0-indexed integer array nums, return true if it can be made strictly increasing after removing exactly one element, or false otherwise. If the array is already strictly increasing, return true.

The array nums is strictly increasing if nums[i - 1] < nums[i] for each index (1 <= i < nums.length).

Example 1:
Input: nums = [1,2,10,5,7]
Output: true
Explanation: By removing 10 at index 2 from nums, it becomes [1,2,5,7].
[1,2,5,7] is strictly increasing, so return true.

Example 2:
Input: nums = [2,3,1,2]
Output: false
Explanation:
[3,1,2] is the result of removing the element at index 0.
[2,1,2] is the result of removing the element at index 1.
[2,3,2] is the result of removing the element at index 2.
[2,3,1] is the result of removing the element at index 3.
No resulting array is strictly increasing, so return false.

Example 3:
Input: nums = [1,1,1]
Output: false
Explanation: The result of removing any element is [1,1].
[1,1] is not strictly increasing, so return false.
*/

function canBeIncreasing(nums: number[]): boolean {
    let isRemoved = false
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] < nums[i + 1]) continue;
        if (isRemoved) return false

        if (i > 0 && nums[i - 1] >= nums[i + 1]) {
            nums[i + 1] = nums[i]
        }
        isRemoved = true;
    }
    return true
};

function _canBeIncreasing(nums: number[]): boolean {
    let index = -1
    let count = 0
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] >= nums[i]) {
            count++
            index = i
        }
    }
    // If more than 1 elements need to remove
    if (count > 1) return false

    // If 0 element need to remove
    if (count == 0) return true

    // If it is first or last element
    if (index == 1 || index == nums.length - 1) return true

    // If nums[index] is removed
    if (nums[index - 1] < nums[index + 1]) return true

    // If nums[index-1] is removed
    if (nums[index - 2] < nums[index]) return true

    return false
}
