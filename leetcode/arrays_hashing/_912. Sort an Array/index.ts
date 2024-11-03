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

function mergeSort(arr: number[], left: number, right: number): number[] {
    console.log('array: ', arr, 'left: ', left, 'right: ', right);
    
    if (left == right) return arr

    const mid = Math.floor((left + right) / 2)
    mergeSort(arr, left, mid)
    mergeSort(arr, mid + 1, right)

    merge(arr, left, mid, right)
    return arr
}

function merge(arr: number[], left: number, mid: number, right: number) {
    const leftArr = arr.slice(left, mid + 1)
    const rightArr = arr.slice(mid + 1, right + 1)
    console.log('left arr: ', leftArr, 'right arr: ', rightArr);
    
    let i = left,
        j = 0,
        k = 0

    while (leftArr.length > j && rightArr.length > k) {
        if (leftArr[j] >= rightArr[k]) {
            arr[i++] = rightArr[k++]
        } else {
            arr[i++] = leftArr[j++]
        }
    }

    while (leftArr.length > j) {
        arr[i++] = leftArr[j++]
    }
    while (rightArr.length > k) {
        arr[i++] = rightArr[k++]
    }
    console.log('final array: ', arr);
    
    return arr
}

console.log(sortArray([9, 3, 1, 7, 4, 2]))

/*
array:  [ 9, 3, 1, 7, 4, 2 ] left:  0 right:  5
array:  [ 9, 3, 1, 7, 4, 2 ] left:  0 right:  2
array:  [ 9, 3, 1, 7, 4, 2 ] left:  0 right:  1
array:  [ 9, 3, 1, 7, 4, 2 ] left:  0 right:  0
array:  [ 9, 3, 1, 7, 4, 2 ] left:  1 right:  1
left arr:  [ 9 ] right arr:  [ 3 ]
final array:  [ 3, 9, 1, 7, 4, 2 ]
array:  [ 3, 9, 1, 7, 4, 2 ] left:  2 right:  2
left arr:  [ 3, 9 ] right arr:  [ 1 ]
final array:  [ 1, 3, 9, 7, 4, 2 ]
array:  [ 1, 3, 9, 7, 4, 2 ] left:  3 right:  5
array:  [ 1, 3, 9, 7, 4, 2 ] left:  3 right:  4
array:  [ 1, 3, 9, 7, 4, 2 ] left:  3 right:  3
array:  [ 1, 3, 9, 7, 4, 2 ] left:  4 right:  4
left arr:  [ 7 ] right arr:  [ 4 ]
final array:  [ 1, 3, 9, 4, 7, 2 ]
array:  [ 1, 3, 9, 4, 7, 2 ] left:  5 right:  5
left arr:  [ 4, 7 ] right arr:  [ 2 ]
final array:  [ 1, 3, 9, 2, 4, 7 ]
left arr:  [ 1, 3, 9 ] right arr:  [ 2, 4, 7 ]
final array:  [ 1, 2, 3, 4, 7, 9 ]
[ 1, 2, 3, 4, 7, 9 ]
*/