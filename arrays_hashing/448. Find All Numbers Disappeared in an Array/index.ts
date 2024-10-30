/*
Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

Example 1:
Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]

Example 2:
Input: nums = [1,1]
Output: [2]

Constraints:
n == nums.length
1 <= n <= 105
1 <= nums[i] <= n

Follow up: Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.
*/

function findDisappearedNumbers(nums: number[]): number[] {
    const result: number[] = []
    // Mark index (negative numbers means correct, positive numbers is incorrect)
    for (let i = 0; i < nums.length; i++) {
        const index = Math.abs(nums[i]) - 1

        if (nums[index] > 0) {
            nums[index] = -nums[index]
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            result.push(i + 1)
        }
    }
    return result
}

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]))
console.log(findDisappearedNumbers([1, 1]))
