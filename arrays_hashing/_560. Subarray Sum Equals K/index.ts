/*
Given an array of integers nums and an integer k, 
return the total number of subarrays whose sum equals to k.

A subarray is a contiguous non-empty sequence of elements within an array.

Example 1:
Input: nums = [1,1,1], k = 2
Output: 2

Example 2:
Input: nums = [1,2,3], k = 3
Output: 2
*/

// Brute force solution
// Time: O(n^2) Space: O(1)
function subarraySum(nums: number[], k: number): number {
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        let sum = 0
        for (let j = i; j < nums.length; j++) {
            sum += nums[j]
            if (sum == k) count++
        }
    }
    return count
}

// Better solution
// Time: O(n) Space: O(n)
function subarraySum2(nums: number[], k: number): number {
    const prefixSum = new Map()
    let count = 0
    let sum = 0
    prefixSum.set(0, 1)
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        if (prefixSum.has(sum - k)) {
            count += prefixSum.get(sum - k)
        }
        prefixSum.set(sum, (prefixSum.get(sum) || 0) + 1)
    }
    return count
}
