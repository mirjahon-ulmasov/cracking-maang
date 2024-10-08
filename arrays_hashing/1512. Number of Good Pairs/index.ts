/*
Given an array of integers nums, return the number of good pairs.
A pair (i, j) is called good if nums[i] == nums[j] and i < j.

------ Example 1 ------
Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.


------ Example 2 ------
Input: nums = [1,1,1,1]
Output: 6
Explanation: Each pair in the array are good.


------ Example 3 ------
Input: nums = [1,2,3]
Output: 0


Hint:
To find pairs, there is formula: n * (n-1)
But there is one problem, it finds all pairs including duplicates
That's why we need to divide by 2: (n * (n-1)) / 2
*/

function numIdenticalPairs(nums: number[]): number {
    const map = new Map();
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1);
        } else {
            map.set(nums[i], 1);
        }
    }
    map.forEach((value, key) => {
        count += (value * (value - 1)) / 2; // By formula
    });
    return count;
}

function numIdenticalPairs2(nums: number[]): number {
    const map = new Map();
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            count += map.get(nums[i]);
            map.set(nums[i], map.get(nums[i]) + 1);
        } else {
            map.set(nums[i], 1);
        }
    }
    return count;
}
