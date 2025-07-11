/*
Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).

The distance between two points on the X-Y plane is the Euclidean distance (i.e., √(x1 - x2)2 + (y1 - y2)2).

You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in).
*/

import { MaxPriorityQueue } from "@datastructures-js/priority-queue"

function kClosest(points: number[][], k: number): number[][] {
    const maxHeap = new MaxPriorityQueue<[[number, number], number]>(item => item[1])
    for (let [x, y] of points) {
        const dist = x ** 2 + y ** 2
        maxHeap.enqueue([[x, y], dist])
        if (maxHeap.size() > k) {
            maxHeap.dequeue()
        }
    }
    return maxHeap.toArray().map(item => item[0])
}; 