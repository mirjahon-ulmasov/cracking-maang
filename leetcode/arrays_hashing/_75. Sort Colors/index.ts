/*
Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

 

Example 1:

Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
Example 2:

Input: nums = [2,0,1]
Output: [0,1,2]
 

Constraints:

n == nums.length
1 <= n <= 300
nums[i] is either 0, 1, or 2.
 

Follow up: Could you come up with a one-pass algorithm using only constant extra space?
*/

/**
 Do not return anything, modify nums in-place instead.
 */

// It is two pass solution
function sortColors(nums: number[]): void {
    let zeros = 0,
        ones = 0,
        twos = 0,
        i = 0

    for (let num of nums) {
        if (num == 0) zeros++
        else if (num == 1) ones++
        else twos++
    }
    while (zeros > 0) {
        nums[i++] = 0
        zeros--
    }
    while (ones > 0) {
        nums[i++] = 1
        ones--
    }
    while (twos > 0) {
        nums[i++] = 2
        twos--
    }
}

// Using Bucket Sort
function sortColors2(nums: number[]): void {
    const arr = new Array(3).fill(0)
    let index = 0

    for (let num of nums) {
        arr[num]++
    }
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i]; j++) {
            nums[index++] = i
        }
    }
}

// Best, one pass solution
function sortColors3(nums: number[]): void {
    let left = 0, right = nums.length - 1, i = 0
    while (right >= i) {
        if (nums[i] == 0) {
            const temp = nums[left]
            nums[left] = nums[i]
            nums[i] = temp
            left++
        } else if (nums[i] == 2) {
            const temp = nums[right]
            nums[right] = nums[i]
            nums[i] = temp
            right--
            i--
        }
        i++       
    }
}

const numbers = [2,0,1]
sortColors3(numbers)
console.log(numbers)
