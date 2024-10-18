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

Constraints:
1 <= n <= 105
nums.length == n + 1
1 <= nums[i] <= n
All the integers in nums appear only once except for precisely one integer which appears two or more times.
 

Follow up:
How can we prove that at least one duplicate number must exist in nums?
Can you solve the problem in linear runtime complexity?
*/

// Time: O(n) Space O(1)
// [1,3,4,2,2] => [-1,3,-4,-2,2]
// [4, 1, 2, 3, 2] => [ -4, 1, -2, -3, 2]
// [2, 4, 2, 3, 1] => [ -2, 4, -2, -3, 1]

function findDuplicate(nums: number[]): number {
    for (let i = 0; i < nums.length; i++) {
        const index = Math.abs(nums[i]) - 1
        nums[index] *= -1
        if (nums[index] > 0) {
            return index + 1
        }
    }
    return 0
}

function findDuplicate2(nums: number[]): number {
    let slow = 0, fast = 0
    do {
        slow = nums[slow]
        fast = nums[nums[fast]]
    } while (slow !== fast)
    
    let slow2 = 0

    while (slow !== slow2) {
        slow = nums[slow]
        slow2 = nums[slow2]
    }

    return slow
}

console.log(findDuplicate2([1, 3, 4, 2, 2]))
console.log(findDuplicate2([3, 1, 3, 4, 2]))
console.log(findDuplicate2([3, 3, 3, 3, 3]))
