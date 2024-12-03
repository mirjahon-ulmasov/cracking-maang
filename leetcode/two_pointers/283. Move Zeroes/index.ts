/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:
Input: nums = [0]
Output: [0]
*/

function moveZeroes(nums: number[]): void {
    let left = 0
    for (let right = 0; right < nums.length; right++) {
        if (nums[right] != 0) {
            const temp = nums[right]
            nums[right] = nums[left]
            nums[left] = temp
            left++
        }
    }
};

function _moveZeroes(nums: number[]): void {
    let zeros = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) zeros++
        else nums[i - zeros] = nums[i]
    }
    for (let i = 0, j = nums.length - 1; i < zeros; i++, j--) {
        nums[j] = 0
    }
};

// INCORRECT ❌❌
// Result: [0,0,1,3,12]
function __moveZeroes(nums: number[]): void {
    let zeroIdx = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            const temp = nums[zeroIdx]
            nums[zeroIdx] = 0
            nums[i] = temp
            zeroIdx++
        }
    }
}
