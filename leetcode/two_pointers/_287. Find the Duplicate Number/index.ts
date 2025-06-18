/*
Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.

You must solve the problem without modifying the array nums and using only constant extra space.

Example 1:
Input: nums = [1,3,4,2,2]
Output: 2

Example 2:
Input: nums = [3,1,3,4,2]
Output: 3

Example 3:
Input: nums = [3,3,3,3,3]
Output: 3
*/

function findDuplicate(nums: number[]): number {
    let tortoise = 0, hare = 0

    while (true) { 
        tortoise = nums[tortoise]
        hare = nums[nums[hare]]
        
        // if only, there is duplicate number, this loop stops
        if (tortoise == hare) break
    }
    // We are now in cycle, but it does not mean, this is start of cycle
    let tortoise2 = 0
    while (tortoise != tortoise2) {
        tortoise = nums[tortoise]
        tortoise2 = nums[tortoise2]
    }
    return tortoise
};