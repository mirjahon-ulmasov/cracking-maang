/*
You are given the array nums consisting of n positive integers. You computed the sum of all non-empty continuous subarrays from the array and then sorted them in non-decreasing order, creating a new array of n * (n + 1) / 2 numbers.

Return the sum of the numbers from index left to index right (indexed from 1), inclusive, in the new array. Since the answer can be a huge number return it modulo 109 + 7.

Example 1:
Input: nums = [1,2,3,4], n = 4, left = 1, right = 5
Output: 13 
Explanation: All subarray sums are 1, 3, 6, 10, 2, 5, 9, 3, 7, 4. After sorting them in non-decreasing order we have the new array [1, 2, 3, 3, 4, 5, 6, 7, 9, 10]. The sum of the numbers from index le = 1 to ri = 5 is 1 + 2 + 3 + 3 + 4 = 13. 

Example 2:
Input: nums = [1,2,3,4], n = 4, left = 3, right = 4
Output: 6
Explanation: The given array is the same as example 1. We have the new array [1, 2, 3, 3, 4, 5, 6, 7, 9, 10]. The sum of the numbers from index le = 3 to ri = 4 is 3 + 3 = 6.

Example 3:
Input: nums = [1,2,3,4], n = 4, left = 1, right = 10
Output: 50
*/

import { MinPriorityQueue } from "@datastructures-js/priority-queue"

function rangeSum(nums: number[], n: number, left: number, right: number): number {
    const MOD = 10 ** 9 + 7
    const minHeap = new MinPriorityQueue<[number, number]>(el => el[0])
    for (let i = 0; i < n; i++) {
        minHeap.enqueue([nums[i], i])
    }

    let result = 0
    for (let i = 0; i < right; i++) {
        const [num, index] = minHeap.dequeue()!
        if (i >= left - 1) {
            result = (result + num) % MOD
        }
        if (index + 1 < n) {
            minHeap.enqueue([num + nums[index + 1], index + 1])
        }
    }
    return result
};

// Time: O(n^2*logn)
function _rangeSum(nums: number[], n: number, left: number, right: number): number {
    const MOD = 10 ** 9 + 7
    const all_subarrays = []
    for (let i = 0; i < nums.length; i++) {
        let sum = 0
        for (let j = i; j < nums.length; j++) {
            sum = (sum + nums[j]) % MOD
            all_subarrays.push(sum)
        }
    }
    all_subarrays.sort((a, b) => a - b)
    let result = 0
    for (let i = left - 1; i < right; i++) {
        result = (result + all_subarrays[i]) % MOD
    }
    return result
};