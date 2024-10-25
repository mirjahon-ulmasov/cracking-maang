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
function sortColors(nums) {
    var zeros = 0, ones = 0, twos = 0, i = 0;
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        if (num == 0)
            zeros++;
        else if (num == 1)
            ones++;
        else
            twos++;
    }
    while (zeros > 0) {
        nums[i++] = 0;
        zeros--;
    }
    while (ones > 0) {
        nums[i++] = 1;
        ones--;
    }
    while (twos > 0) {
        nums[i++] = 2;
        twos--;
    }
}
// Using Bucket Sort
function sortColors2(nums) {
    var arr = new Array(3).fill(0);
    var index = 0;
    for (var _i = 0, nums_2 = nums; _i < nums_2.length; _i++) {
        var num = nums_2[_i];
        arr[num]++;
    }
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i]; j++) {
            nums[index++] = i;
        }
    }
}
function sortColors3(nums) {
    var left = 0, right = nums.length - 1, i = 0;
    while (right >= i) {
        if (nums[i] == 0) {
            var temp = nums[left];
            nums[left] = nums[i];
            nums[i] = temp;
            left++;
            i++;
        }
        else if (nums[i] == 2) {
            var temp = nums[right];
            nums[right] = nums[i];
            nums[i] = temp;
            right--;
        }
        console.log(left, right, i, nums);
    }
}
var numbers = [2, 0, 1];
sortColors3(numbers);
console.log(numbers);
