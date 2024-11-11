/*
Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

Example 1:
Input: nums = [3,2,3]
Output: [3]

Example 2:
Input: nums = [1]
Output: [1]
Example 3:

Input: nums = [1,2]
Output: [1,2]
 

Constraints:
1 <= nums.length <= 5 * 104
-109 <= nums[i] <= 109

Follow up: Could you solve the problem in linear time and in O(1) space?
*/

function majorityElement(nums: number[]): number[] {
    let majority1 = 0,
        majority2 = 0,
        count1 = 0,
        count2 = 0
    const arr = []
    for (const num of nums) {
        if (majority1 == num) {
            count1++
        } else if (majority2 == num) {
            count2++
        } else if (count1 == 0) {
            majority1 = num
            count1++
        } else if (count2 == 0) {
            majority2 = num
            count2++
        } else {
            count1--
            count2--
        }
        // console.log(majority1 + ':' + count1 + ", ", majority2 + ':' + count2)
    }
    count1 = 0
    count2 = 0
    for (const num of nums) {
        if (majority1 == num) count1++
        else if (majority2 == num) count2++
    }
    if (count1 > Math.floor(nums.length / 3)) arr.push(majority1)
    if (count2 > Math.floor(nums.length / 3)) arr.push(majority2)
    return arr
}

function _majorityElement(nums: number[]): number[] {
    let map = new Map<number, number>() // 2 length at most
    const result = [] // 2 length at most
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1)
        if (map.size > 2) {
            const temp = new Map<number, number>()
            for (let [key, value] of map) {
                if (value > 1) {
                    temp.set(key, value - 1)
                }
            }
            map = temp
        }
        // console.log(map)
    }
    if (map.size == 0) return []

    const [first, second] = Array.from(map.keys())
    let firstCounter = 0, secondCounter = 0

    for (let num of nums) {
        if (first != undefined && first == num) firstCounter++
        else if (second != undefined && second == num) secondCounter++
    }
    if (firstCounter > nums.length / 3) result.push(first)
    if (secondCounter > nums.length / 3) result.push(second)

    return result
}

/*
Map(1) { 2 => 1 }
Map(2) { 2 => 1, 1 => 1 }
Map(2) { 2 => 1, 1 => 2 }
Map(1) { 1 => 1 }
Map(1) { 1 => 2 }
Map(2) { 1 => 2, 4 => 1 }
Map(1) { 1 => 1 }
Map(2) { 1 => 1, 6 => 1 }
*/
