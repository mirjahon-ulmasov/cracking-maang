/*
You are given a 0-indexed array nums of distinct integers. 
You want to rearrange the elements in the array such that 
every element in the rearranged array is not equal to the average of its neighbors.

More formally, the rearranged array should have the property such that 
for every i in the range 1 <= i < nums.length - 1, (nums[i-1] + nums[i+1]) / 2 is not equal to nums[i].

Return any rearrangement of nums that meets the requirements.

Example 1:
Input: nums = [1,2,3,4,5]
Output: [1,2,4,5,3]
Explanation:
When i=1, nums[i] = 2, and the average of its neighbors is (1+4) / 2 = 2.5.
When i=2, nums[i] = 4, and the average of its neighbors is (2+5) / 2 = 3.5.
When i=3, nums[i] = 5, and the average of its neighbors is (4+3) / 2 = 3.5.

Example 2:
Input: nums = [6,2,0,9,7]
Output: [9,7,6,2,0]
Explanation:
When i=1, nums[i] = 7, and the average of its neighbors is (9+6) / 2 = 7.5.
When i=2, nums[i] = 6, and the average of its neighbors is (7+2) / 2 = 4.5.
When i=3, nums[i] = 2, and the average of its neighbors is (6+0) / 2 = 3.
*/

// Time: O(n) Space: O(1)
// Algorithm: Wiggle Sort
// At even index, element should be less than previous element, 
// and at odd index element should be more than previous element
function rearrangeArray(nums: number[]): number[] {
    for (let i = 1; i < nums.length; i++) {
        if (i % 2 == 1 && nums[i] > nums[i - 1]) continue
        else if (i % 2 == 0 && nums[i] < nums[i - 1]) continue

        const temp = nums[i]
        nums[i] = nums[i - 1]
        nums[i - 1] = temp
    }
    return nums
}

// Time: O(n*logn) Space: O(n)
function _rearrangeArray(nums: number[]): number[] {
    const N = nums.length
    const arr = new Array(N)
    let numIdx = 0, arrIdx = 0
    nums.sort((a, b) => a - b)
    while (numIdx < Math.ceil(N / 2)) {
        arr[arrIdx] = nums[numIdx]
        numIdx += 1
        arrIdx += 2
    }
    arrIdx = 1
    while (numIdx < N) {
        arr[arrIdx] = nums[numIdx]
        numIdx += 1
        arrIdx += 2
    }
    return arr
};