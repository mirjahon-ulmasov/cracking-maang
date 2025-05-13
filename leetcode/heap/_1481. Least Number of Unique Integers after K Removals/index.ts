/*
Given an array of integers arr and an integer k. 
Find the least number of unique integers after removing exactly k elements.
*/

import { MinPriorityQueue } from "@datastructures-js/priority-queue"

function findLeastNumOfUniqueInts(arr: number[], k: number): number {
    const freq = new Map()
    for (let num of arr) {
        freq.set(num, (freq.get(num) || 0) + 1)
    }
    const minPQ = new MinPriorityQueue<[number, number]>(item => item[1])
    for (let [key, value] of freq) {
        minPQ.enqueue([key, value])
    }
    while (k > 0 && !minPQ.isEmpty()) {
        const [key, value] = minPQ.dequeue()!
        if (k >= value) {
            freq.delete(key)
            k -= value
        } else {
            freq.set(key, value - k)
            k = 0
        }
    }
    return freq.size
};

function _findLeastNumOfUniqueInts(arr: number[], k: number): number {
    const freq = new Map()
    const n = arr.length
    for (let num of arr) {
        freq.set(num, (freq.get(num) || 0) + 1)
    }
    let result = freq.size
    const bucket = new Array(n + 1).fill(0)
    for (let value of freq.values()) {
        bucket[value]++
    }
    for (let i = 1; i < n + 1; i++) {
        let remove = bucket[i]
        if (i * remove <= k) {
            k -= (i * remove)
            result -= remove
        } else {
            remove = Math.floor(k / i)
            result -= remove
            break;
        }
    }
    return result
};