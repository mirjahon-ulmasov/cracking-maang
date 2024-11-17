/*
Given an integer array nums, return all the different possible non-decreasing subsequences of the given array with at least two elements. You may return the answer in any order.

Example 1:
Input: nums = [4,6,7,7]
Output: [[4,6],[4,6,7],[4,6,7,7],[4,7],[4,7,7],[6,7],[6,7,7],[7,7]]

Example 2:
Input: nums = [4,4,3,2,1]
Output: [[4,4]]
*/

// Time: O(2^n) Space: O(n)
function findSubsequences(nums: number[]): number[][] {
    const result = new Set<string>()
    for (let i = 1; i < 1 << nums.length; i++) {
        const temp = []
        for (let j = 0; j < nums.length; j++) {
            if (i & (1 << j)) {
                temp.push(nums[j])
            }
        }
        if (temp.length < 2) continue
        let isIncreasing = true
        for (let k = 0; k < temp.length - 1; k++) {
            if (temp[k] > temp[k + 1]) {
                isIncreasing = false
                break
            }
        }
        if (isIncreasing) {
            result.add(temp.toString())
        }
    }
    return Array.from(result, str =>
        str
            .split(",")
            .filter(el => el !== ",")
            .map(Number)
    )
}

// Function to find all the increasing subsequences in the given array.
function _findSubsequences(nums: number[]): number[][] {
    let subsequences: number[][] = [];
    let currentSubsequence: number[] = [];
  
    // Call the backtrack function to start processing the subsequences
    backtrack(0, Number.MIN_SAFE_INTEGER, nums, currentSubsequence, subsequences); 
    return subsequences;
}

// Uses backtracking to find all subsequences.
// index is the current index in nums.
// lastNumber is the last number added to the current subsequence.
// nums is the input array of numbers.
// currentSubsequence holds the current subsequence being explored.
// subsequences is the collection of all valid subsequences found.
function backtrack(index: number, lastNumber: number, nums: number[], currentSubsequence: number[], subsequences: number[][]): void {
    if (index === nums.length) { // Base case: reached the end of nums
        if (currentSubsequence.length > 1) { // If the subsequence has more than 1 element, add it to the answer.
            subsequences.push([...currentSubsequence]);
        }
        return;
    }
  
    // If the current number can be added to the subsequence according to the problem definition (non-decreasing order)
    if (nums[index] >= lastNumber) {
        currentSubsequence.push(nums[index]); // Add number to the current subsequence.
        backtrack(index + 1, nums[index], nums, currentSubsequence, subsequences); // Recursively call with the next index.
        currentSubsequence.pop(); // Backtrack: remove the number from current subsequence.
    }
  
    // If current number is not equal to the last number added to the subsequence, continue to next index.
    // This avoids duplicates in the subsequences list.
    if (nums[index] !== lastNumber) {
        backtrack(index + 1, lastNumber, nums, currentSubsequence, subsequences); // Recursively call with the next index.
    }
}

// Example usage:
const input: number[] = [4, 6, 7, 7];
const output: number[][] = findSubsequences(input);
console.log(output); // Output the increasing subsequences.