/*
Given an unsorted integer array nums. Return the smallest positive integer that is not present in nums.

You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space.

Example 1:

Input: nums = [1,2,0]
Output: 3
Explanation: The numbers in the range [1,2] are all in the array.
Example 2:

Input: nums = [3,4,-1,1]
Output: 2
Explanation: 1 is in the array but 2 is missing.
Example 3:

Input: nums = [7,8,9,11,12]
Output: 1
Explanation: The smallest positive integer 1 is missing.
*/
// Time: O(n) Space: O(1)
function firstMissingPositive(nums) {
    var N = nums.length;
    // If there is num <= 0 or num > N, we set N + 1
    for (var i = 0; i < N; i++) {
        if (nums[i] <= 0 || nums[i] > N) {
            nums[i] = N + 1;
        }
    }
    for (var i = 0; i < N; i++) {
        var index = Math.abs(nums[i]) - 1; // index starts i >= 0
        if (index >= N)
            continue; // if nums[index] is out of bounce
        if (nums[index] > 0) {
            nums[index] = -nums[index];
        }
    }
    for (var i = 0; i < N; i++) {
        if (nums[i] > 0) {
            return i + 1;
        }
    }
    return N + 1;
}
console.log(firstMissingPositive([1, 2, 0]));
console.log(firstMissingPositive([3, 4, -1, 1]));
console.log(firstMissingPositive([5, 2, 2, 4, 6]));
