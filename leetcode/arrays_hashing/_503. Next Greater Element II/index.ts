/*
Given a circular integer array nums (i.e., the next element of nums[nums.length - 1] is nums[0]), return the next greater number for every element in nums.

The next greater number of a number x is the first greater number to its traversing-order next in the array, which means you could search circularly to find its next greater number. If it doesn't exist, return -1 for this number.

 

Example 1:

Input: nums = [1,2,1]
Output: [2,-1,2]
Explanation: The first 1's next greater number is 2; 
The number 2 can't find next greater number. 
The second 1's next greater number needs to search circularly, which is also 2.
Example 2:

Input: nums = [1,2,3,4,3]
Output: [2,3,4,-1,4]
*/

// Time: O(n) Space: O(n)
function nextGreaterElements(nums: number[]): number[] {
    const N = nums.length
    const result = new Array(N).fill(-1)
    const stack = []

    for (let i = 0; i < 2 * N - 1; i++) {
        const num = nums[i % N]
        while (stack.length > 0 && nums[stack[stack.length - 1]] < num) {
            const idx = stack.pop() as number
            result[idx] = num
        }
        if (i < N) {
            stack.push(i)
        }
    }
    return result
}

// Time: O(n^2)
function _nextGreaterElements(nums: number[]): number[] {
    const N = nums.length
    const result = new Array(N).fill(-1)

    for (let i = 0; i < N; i++) {
        let right = i > N - 1 ? 0 : i + 1
        while (nums[right] != nums[i] || right != i) {
            if (nums[right] > nums[i]) {
                result[i] = nums[right]
                break
            }
            right = right > N - 1 ? 0 : right + 1
        }
    }
    return result
}
