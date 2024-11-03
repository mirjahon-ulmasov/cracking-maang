/*
Given a list of non-negative integers nums,
arrange them such that they form the largest number and return it.

Since the result may be very large, so you need to return a string instead of an integer.

Example 1:
Input: nums = [10,2]
Output: "210"

Example 2:
Input: nums = [3,30,34,5,9]
Output: "9534330"
*/
function largestNumber(nums) {
    var swapped;
    function swap(i, j) {
        var temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
    function check(num1, num2) {
        var str1 = num1.toString();
        var str2 = num2.toString();
        var n1 = Number(str1 + str2);
        var n2 = Number(str2 + str1);
        return n1 < n2;
    }
    for (var i = 0; i < nums.length - 1; i++) {
        swapped = false;
        for (var j = 0; j < nums.length - i - 1; j++) {
            if (check(nums[j], nums[j + 1])) {
                swap(j, j + 1);
                swapped = true;
            }
        }
        // IF no two elements were swapped by inner loop, then break
        if (!swapped)
            break;
    }
    return nums.join("");
}
// With sort()
function largestNumber2(nums) {
    function check(num1, num2) {
        return num1 + num2 > num2 + num1 ? -1 : 1;
    }
    return nums.sort(function (a, b) { return check(a.toString(), b.toString()); }).join("");
}
console.log(largestNumber2([3, 30, 34, 5, 9]));
console.log(largestNumber2([10, 2]));
