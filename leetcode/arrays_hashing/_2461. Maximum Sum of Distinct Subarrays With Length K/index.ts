/*
You are given an integer array nums and an integer k. Find the maximum subarray sum of all the subarrays of nums that meet the following conditions:

The length of the subarray is k, and
All the elements of the subarray are distinct.
Return the maximum subarray sum of all the subarrays that meet the conditions. If no subarray meets the conditions, return 0.

A subarray is a contiguous non-empty sequence of elements within an array.

Example 1:
Input: nums = [1,5,4,2,9,9,9], k = 3
Output: 15
Explanation: The subarrays of nums with length 3 are:
- [1,5,4] which meets the requirements and has a sum of 10.
- [5,4,2] which meets the requirements and has a sum of 11.
- [4,2,9] which meets the requirements and has a sum of 15.
- [2,9,9] which does not meet the requirements because the element 9 is repeated.
- [9,9,9] which does not meet the requirements because the element 9 is repeated.
We return 15 because it is the maximum subarray sum of all the subarrays that meet the conditions

Example 2:
Input: nums = [4,4,4], k = 3
Output: 0
Explanation: The subarrays of nums with length 3 are:
- [4,4,4] which does not meet the requirements because the element 4 is repeated.
We return 0 because no subarrays meet the conditions.
*/

function maximumSubarraySum(nums: number[], k: number): number {
    const map = new Map()
    let maxSum = 0
    let total = 0
    for (let i = 0; i < k; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1)
        total += nums[i]
    }
    for (let i = 0; i < nums.length - k; i++) {
        if (map.size == k) {
            maxSum = Math.max(maxSum, total)
        }
        if ((map.get(nums[i]) || 0) > 1) {
            map.set(nums[i], map.get(nums[i]) - 1)
        } else {
            map.delete(nums[i])
        }
        map.set(nums[i + k], (map.get(nums[i + k]) || 0) + 1)

        total -= nums[i]
        total += nums[i + k]
    }
    if (map.size == k) {
        maxSum = Math.max(maxSum, total)
    }
    return maxSum
}

function _maximumSubarraySum(nums: number[], k: number): number {
    let max = 0
    let countedSet = new Set()
    let currentSum = 0
    let left = 0

    for (let right = 0; right < nums.length; right++) {
        const num = nums[right]
        currentSum += num

        while (countedSet.has(num) && left < right) {
            currentSum -= nums[left]
            countedSet.delete(nums[left])
            left++
        }

        console.log(countedSet)

        countedSet.add(num)

        if (countedSet.size === k) {
            max = Math.max(currentSum, max)
            countedSet.delete(nums[left])
            currentSum -= nums[left]
            left++
        }
    }

    return max
}

console.log(maximumSubarraySum([1, 1, 1, 7, 8, 9], 3))
console.log(maximumSubarraySum([1, 5, 4, 2, 9, 9, 9], 3))
