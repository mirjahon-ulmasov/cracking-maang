/*
The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.

You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.

For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.

Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.

 

Example 1:

Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
Output: [-1,3,-1]
Explanation: The next greater element for each value of nums1 is as follows:
- 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
- 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
- 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
Example 2:

Input: nums1 = [2,4], nums2 = [1,2,3,4]
Output: [3,-1]
Explanation: The next greater element for each value of nums1 is as follows:
- 2 is underlined in nums2 = [1,2,3,4]. The next greater element is 3.
- 4 is underlined in nums2 = [1,2,3,4]. There is no next greater element, so the answer is -1.
*/

// Time: O(n+m)
function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    const map = new Map()
    const stack = []
    const result = []
    for (let i = 0; i < nums1.length; i++) {
        map.set(nums1[i], i)
        result.push(-1)
    }
    for (let num of nums2) {
        while (stack.length > 0 && stack[stack.length - 1] < num) {
            const val = stack.pop()
            const idx = map.get(val)
            result[idx] = num
        }
        if (map.has(num)) {
            stack.push(num)
        }
    }
    return result
}

// Time: O(n*m)
function _nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    const result: number[] = []
    for (let i = 0; i < nums1.length; i++) {
        let isFound = false
        result.push(-1)
        for (let j = 0; j < nums2.length; j++) {
            if (!isFound && nums1[i] == nums2[j]) {
                isFound = true
                continue
            }
            if (isFound && nums1[i] < nums2[j]) {
                result[i] = nums2[j]
                break
            }
        }
    }
    return result
}
