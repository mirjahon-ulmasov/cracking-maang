/*
Given n non-negative integers representing an elevation map 
where the width of each bar is 1, compute how much water it can trap after raining.

Example 1:
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

Example 2:
Input: height = [4,2,0,3,2,5]
Output: 9
*/

// This problem based on finding next greater element to left/right of ith position
// We need to find each index of greater element to right/left and take the min number,
// and substract current element
function trap(height: number[]): number {
    const N = height.length
    const leftHeights = new Array(N)
    const rightHeights = new Array(N)
    let total = 0
    leftHeights[0] = height[0]
    rightHeights[N - 1] = height[N - 1]
    for (let l = 1, r = N - 2; l < N; l++, r--) {
        leftHeights[l] = Math.max(height[l], leftHeights[l - 1])
        rightHeights[r] = Math.max(height[r], rightHeights[r + 1])
    }
    for (let i = 0; i < N; i++) {
        total += Math.min(leftHeights[i], rightHeights[i]) - height[i]
    }
    return total
}