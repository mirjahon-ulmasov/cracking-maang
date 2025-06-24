/*
You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

Return the max sliding window.

Example 1:
Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]
Explanation: 
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7

Example 2:
Input: nums = [1], k = 1
Output: [1]
*/

function maxSlidingWindow(nums: number[], k: number): number[] {
    const stack = [], result = []
    let L = 0
    for (let R = 0; R < nums.length; R++) {
        while (stack.length > 0 && nums[stack[stack.length - 1]] <= nums[R]) {
            stack.pop()
        }
        stack.push(R)
        if (L > stack[0]) {
            stack.shift()
        }
        if (R + 1 - L >= k) {
            result.push(nums[stack[0]])
            L++
        }
    }
    return result
};