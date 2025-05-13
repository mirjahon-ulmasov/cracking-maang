/*
Given an array of integers arr and an integer k. 
Find the least number of unique integers after removing exactly k elements.
*/

import { MinPriorityQueue } from "@datastructures-js/priority-queue"

function findLeastNumOfUniqueInts(arr, k) {
    const freq = new Map()
    for (let num of arr) {
        freq.set(num, (freq.get(num) || 0) + 1)
    }
    const minPQ = new MinPriorityQueue(item => item[1])
    for (let [key, value] of freq) {
        minPQ.enqueue([key, value])
    }
    while (k > 0 && !minPQ.isEmpty()) {
        const [key, value] = minPQ.dequeue()
        if (k >= value) {
            freq.delete(key)
            k -= value
        } else {
            freq.set(key, value - k)
            k = 0
        }
    }
    return freq.size
}

console.log(findLeastNumOfUniqueInts([5, 5, 4], 1))
console.log(findLeastNumOfUniqueInts([4, 3, 1, 1, 3, 3, 2], 3))
