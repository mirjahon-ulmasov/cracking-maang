/*
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

Example 1:
Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

Example 2:
Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9

Constraints:
0 <= nums.length <= 10^5
-10^9 <= nums[i] <= 10^9
*/
function longestConsecutive(nums) {
    var count = 0;
    var set = new Set(nums);
    for (var i = 0; i < nums.length; i++) {
        if (!set.has(nums[i] - 1)) {
            var j = 1;
            var tempCount = 0;
            // Starting point of sequence number
            while (set.has(nums[i] + j)) {
                tempCount++;
                j++;
            }
            if (count < tempCount)
                count = tempCount;
        }
    }
    return count;
}
console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
