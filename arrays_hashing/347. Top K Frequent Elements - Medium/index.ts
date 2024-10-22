/*
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

Example 1:
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Example 2:
Input: nums = [1], k = 1
Output: [1]
 

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.

Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
*/

function topKFrequent(nums: number[], k: number): number[] {
    const result = new Array(k).fill(0)
    const map = new Map()
    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1)
    }
    for (let i = 0; i < k; i++) {
        let localKey = 0,
            localValue = 0
        for (let [key, value] of map.entries()) {
            if (localValue < value) {
                localValue = value
                localKey = key
            }
        }
        result[i] = localKey
        map.delete(localKey)
    }
    return result
}

/*
Using Bucket Sort
P: [1,1,1,2,2,3]
S: after HashMap, we have 1 -> 3, 2 -> 2, 3 -> 1
we create array length of input array, in each arr[i] has another array, where i is value of HashMap
[[], [3], [2], [1], [], [], []]
*/

function topKFrequent2(nums: number[], k: number): number[] {
    const result: number[] = []
    const map = new Map<number, number>()
    const frequent: number[][] = new Array(nums.length + 1).fill(() => [])

    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1)
    }
    map.forEach((value, key) => {
        frequent[value].push(key)
    })

    for (let i = frequent.length - 1; i > 0; i--) {
        for (let j = 0; j < frequent[i].length; j++) {
            result.push(frequent[i][j])            
            if (result.length == k) {
                return result
            }
        }
    }
    return result
}

console.log(topKFrequent2([1], 1))
