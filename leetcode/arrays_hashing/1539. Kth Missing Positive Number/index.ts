/*
Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.

Return the kth positive integer that is missing from this array.

Example 1:
Input: arr = [2,3,4,7,11], k = 5
Output: 9
Explanation: The missing positive integers are [1,5,6,8,9,10,12,13,...]. The 5th missing positive integer is 9.

Example 2:
Input: arr = [1,2,3,4], k = 2
Output: 6
Explanation: The missing positive integers are [5,6,7,...]. The 2nd missing positive integer is 6.
*/

// Time: O(n) Space: O(n)
function findKthPositive(arr: number[], k: number) {
    const set = new Set(arr)
    let counter = 0
    for (let i = 1; i <= arr.length + k; i++) {
        if (set.has(i)) continue

        counter++
        if (counter == k) {
            return i
        }
    }
}

// Time: O(logn) Space: O(1)
function _findKthPositive(arr: number[], k: number): number {
    let left = 0;
    let right = arr.length - 1;
    while(left <= right){
        const mid = Math.floor((left + right) / 2);
        if(arr[mid] - mid - 1 < k)
            left = mid + 1;
        else
            right = mid - 1;
    }
    return left + k;
};