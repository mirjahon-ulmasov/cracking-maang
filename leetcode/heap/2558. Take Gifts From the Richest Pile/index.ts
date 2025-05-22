import { MaxPriorityQueue } from "@datastructures-js/priority-queue"

function pickGifts(gifts: number[], k: number): number {
    const maxHeap = new MaxPriorityQueue<number>()
    for (let gift of gifts) {
        maxHeap.enqueue(gift)
    }
    for (let i = 0; i < k; i++) {
        const num = maxHeap.dequeue()!
        maxHeap.enqueue(Math.floor(Math.sqrt(num)))
    }
    return maxHeap.toArray().reduce((acc, cur) => acc + cur, 0)
}
