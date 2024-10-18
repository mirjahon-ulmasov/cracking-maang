/*
You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

You are given an integer array nums representing the data status of this set after the error.

Find the number that occurs twice and the number that is missing and return them in the form of an array.

Example 1:
Input: nums = [1,2,2,4]
Output: [2,3]

Example 2:
Input: nums = [1,1]
Output: [1,2]
*/

// My solution :(
// Time: O(n) Space: 0(n)
function findErrorNums(nums: number[]): number[] {
    const map = new Map()
    let num = 0
    for (let i = 0; i < nums.length; i++) {
        if ((map.get(nums[i]) || 0) == 1) {
            num = nums[i]
        }
        if (!map.has(i + 1)) {
            map.set(i + 1, 0)
        }
        map.set(nums[i], 1)
    }
    for (let [key, value] of map.entries()) {
        if (value == 0) {
            return [num, key]
        }
    }
    return []
}

// Better solution
// Time: O(n) Space: 0(n)
function findErrorNums2(nums: number[]): number[] {
    const res = [0, 0]
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1)
    }
    for (let i = 0; i < nums.length; i++) {
        if (!map.has(i + 1)) res[0] = i + 1
        else if (map.get(i + 1) == 2) res[1] = i + 1
    }
    return res
}

// Best solution !!!
// Time: 0(n) Space: 0(1)
function findErrorNums3(nums: number[]): number[] {
    const res = [0, 0]
    for (let i = 0; i < nums.length; i++) {
        let index = Math.abs(nums[i]) - 1
        nums[index] *= -1
        if (nums[index] > 0) {
            res[0] = index + 1
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0 && i + 1 != res[0]) {
            res[1] = i + 1
            return res
        }
    }

    return res
}

console.log(findErrorNums([2, 3, 2]))
console.log(findErrorNums([1, 2, 2, 4]))
