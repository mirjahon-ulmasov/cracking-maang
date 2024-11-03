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

// using built-in sort()
function largestNumber2(nums: number[]): string {
    function check(n1: string, n2: string) {
        return n1 + n2 > n2 + n1 ? -1 : 1
    }
    nums.sort((a, b) => check(a.toString(), b.toString()))

    // If largest number is 0, then result is 0
    if (nums[0] == 0) return "0"
    return nums.join("")
}

console.log(largestNumber2([3, 30, 34, 5, 9]))
console.log(largestNumber2([10, 2]))
