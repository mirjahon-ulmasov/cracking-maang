/*
Given an integer array nums sorted in non-decreasing order, 
remove some duplicates in-place such that each unique element appears at most twice. 
The relative order of the elements should be kept the same.
Since it is impossible to change the length of the array in some languages, 
you must instead have the result be placed in the first part of the array nums. 
More formally, if there are k elements after removing the duplicates, 
then the first k elements of nums should hold the final result. 
It does not matter what you leave beyond the first k elements.
Return k after placing the final result in the first k slots of nums.
Do not allocate extra space for another array. 
You must do this by modifying the input array in-place with O(1) extra memory.

Example 1:
Input: nums = [1,1,1,2,2,3]
Output: 5, nums = [1,1,2,2,3,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

Example 2:
Input: nums = [0,0,1,1,1,1,2,3,3]
Output: 7, nums = [0,0,1,1,2,3,3,_,_]
Explanation: Your function should return k = 7, with the first seven elements of nums being 0, 0, 1, 1, 2, 3 and 3 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
*/

function removeDuplicates(nums: number[]): number {
    if (nums.length <= 2) return nums.length;
    let k = 2
    for (let i = 2; i < nums.length; i++) {
        if (nums[i] != nums[k - 2]) {
            nums[k] = nums[i]
            k += 1
        }
    }
    return k
};

function _removeDuplicates(nums: number[]): number {
    let left = 0, right = 0
    while (right < nums.length) {
        let count = 1
        while (right + 1 < nums.length && nums[right] == nums[right + 1]) {
            count += 1
            right += 1
        }
        count = Math.min(2, count)
        for (let i = 0; i < count; i++) {
            nums[left] = nums[right]
            left += 1
        }
        right += 1
    }
    return left
}

function __removeDuplicates(nums: number[]): number {
    let left = 2
    for (let right = 2; right < nums.length; right++) {
        if (nums[right] == nums[left - 1] && nums[left - 1] == nums[left - 2]) {
            continue
        }
        nums[left] = nums[right]
        left++
    }
    return left
}
