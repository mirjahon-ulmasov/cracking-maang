/*
You are given an integer array nums. You need to create a 2D array from nums satisfying the following conditions:

The 2D array should contain only the elements of the array nums.
Each row in the 2D array contains distinct integers.
The number of rows in the 2D array should be minimal.
Return the resulting array. If there are multiple answers, return any of them.

Note that the 2D array can have a different number of elements on each row.

Example 1:
Input: nums = [1,3,4,1,2,3,1]
Output: [[1,3,4,2],[1,3],[1]]
Explanation: We can create a 2D array that contains the following rows:
- 1,3,4,2
- 1,3
- 1
All elements of nums were used, and each row of the 2D array contains distinct integers, so it is a valid answer.
It can be shown that we cannot have less than 3 rows in a valid array.
Example 2:

Input: nums = [1,2,3,4]
Output: [[4,3,2,1]]
Explanation: All elements of the array are distinct, so we can keep all of them in the first row of the 2D array.
*/

/*
Time: O(n)
Problem: [1,3,4,1,2,3,1]
Solution: 
1 -> 1 : [[1]]
3 -> 1 : [[1,3]]
4 -> 1 : [[1,3,4]]
1 -> 2 : [[1,3,4],[1]]
2 -> 1 : [[1,3,4,2],[1]]
3 -> 2 : [[1,3,4,2],[1,3]]
1 -> 3 : [[1,3,4,2],[1,3],[1]]
*/
function findMatrix(nums: number[]): number[][] {
    const map = new Map()
    let result: number[][] = []
    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1)
        const index = map.get(num) - 1
        if (!result[index]) {
            result[index] = []
        }
        result[index].push(num)
    }
    return result
}

// Time: O(3n)
function _findMatrix(nums: number[]): number[][] {
    const map = new Map()
    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1)
    }
    let maxSize = map.size
    map.forEach(value => {
        maxSize = Math.max(maxSize, value)
    })
    let result: number[][] = Array.from({ length: maxSize }, () => [])
    for (const [key, value] of map) {
        for (let i = 0; i < value; i++) {
            result[i].push(key)
        }
    }
    result = result.filter(arr => arr.length > 0)
    return result
}
