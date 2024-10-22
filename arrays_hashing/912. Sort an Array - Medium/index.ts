/*
Given an array of integers nums, sort the array in ascending order and return it.

You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.

Example 1:
Input: nums = [5,2,3,1]
Output: [1,2,3,5]
Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).

Example 2:
Input: nums = [5,1,1,2,0,0]
Output: [0,0,1,1,2,5]
Explanation: Note that the values of nums are not necessairly unique.

Constraints:
1 <= nums.length <= 5 * 104
-5 * 104 <= nums[i] <= 5 * 104
*/

// Using Merge Sort
function sortArray(nums: number[]): number[] {
    return mergeSort(nums, 0, nums.length - 1)
}

function mergeSort(arr: number[], left: number, right: number) {
    if (left == right) return arr

    const mid = Math.floor((left + right) / 2)
    mergeSort(arr, left, mid)
    mergeSort(arr, mid + 1, right)
    merge(arr, left, mid, right)
    return arr
}

function merge(arr: number[], L: number, M: number, R: number) {
    const leftArr = arr.slice(L, M + 1)
    const rightArr = arr.slice(M + 1, R + 1)
    let i = L, j = 0, k = 0

    while (j < leftArr.length && k < rightArr.length) {
        if (leftArr[j] <= rightArr[k]) {
            arr[i++] = rightArr[k++]
        } else {
            arr[i++] = leftArr[j++]
        }
    }
    while (j < leftArr.length) {
        arr[i++] = leftArr[j++]
    }
    while (k < rightArr.length) {
        arr[i++] = rightArr[k++]
    }
    return arr
}

console.log(sortArray([5,2,3,1]));
