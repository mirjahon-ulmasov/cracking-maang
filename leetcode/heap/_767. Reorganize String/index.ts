/*
Given a string s, rearrange the characters of s so that any two adjacent characters are not the same.

Return any possible rearrangement of s or return "" if not possible.

Example 1:
Input: s = "aab"
Output: "aba"

Example 2:
Input: s = "aaab"
Output: ""
*/

import { MaxPriorityQueue } from "@datastructures-js/priority-queue"

function reorganizeString(s: string): string {
    // 1) count frequency of each char
    const freq = new Map<string, number>()
    for (let char of s) {
        freq.set(char, (freq.get(char) || 0) + 1)
    }
    // 2) get most 2 freq char using max heap & construct string
    const maxHeap = new MaxPriorityQueue<[string, number]>(item => item[1])
    for (let [key, value] of freq) {
        maxHeap.enqueue([key, value])
    }
    const result: string[] = []
    while (maxHeap.size() > 1) {
        const [key1, value1] = maxHeap.dequeue()!
        const [key2, value2] = maxHeap.dequeue()!

        result.push(key1)
        result.push(key2)

        if (value1 > 1) maxHeap.enqueue([key1, value1 - 1])
        if (value2 > 1) maxHeap.enqueue([key2, value2 - 1])
    }
    if (!maxHeap.isEmpty()) {
        const [key, value] = maxHeap.dequeue()!
        if (value > 1 || result[result.length - 1] === key) return ""
        result.push(key)
    }
    return result.join('')
};