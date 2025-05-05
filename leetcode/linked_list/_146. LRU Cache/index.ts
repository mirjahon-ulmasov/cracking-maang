/*
Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

Implement the LRUCache class:

LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
int get(int key) Return the value of the key if the key exists, otherwise return -1.
void put(int key, int value) Update the value of the key if the key exists. 
Otherwise, add the key-value pair to the cache. 
If the number of keys exceeds the capacity from this operation, evict the least recently used key.
The functions get and put must each run in O(1) average time complexity.

Input
["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
Output
[null, null, null, 1, null, -1, null, -1, 3, 4]

Explanation
LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
lRUCache.get(1);    // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
lRUCache.get(2);    // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
lRUCache.get(1);    // return -1 (not found)
lRUCache.get(3);    // return 3
lRUCache.get(4);    // return 4
*/

// @ts-nocheck
class Node {
    key: number
    value: number
    prev: Node | null
    next: Node | null
    constructor(key: number, value: number) {
        this.key = key
        this.value = value
        this.prev = null
        this.next = null
    }
}

class LinkedList {
    public head: Node
    public tail: Node

    constructor() {
        this.head = new Node(0, 0)
        this.tail = new Node(0, 0)
        this.head.next = this.tail
        this.tail.prev = this.head
    }
    isEmpty() {
        return this.head.next == this.tail
    }
    pushRight(node: Node) {
        const prevTail = this.tail.prev
        prevTail.next = node
        this.tail.prev = node
        node.next = this.tail
        node.prev = prevTail
    }
    pop(node: Node): Node | null {
        if (this.isEmpty()) return null
        node.prev.next = node.next
        node.next.prev = node.prev
        return node
    }
    popLeft(): Node | null {
        if (this.isEmpty()) return null
        const removed = this.pop(this.head.next)
        return removed
    }
}

class LRUCache {
    public map: Map<number, Node>
    public capacity: number
    public list: LinkedList
    constructor(capacity: number) {
        this.map = new Map()
        this.capacity = capacity
        this.list = new LinkedList()
    }
    update(node: Node) {
        this.list.pop(node)
        this.list.pushRight(node)
    }
    get(key: number): number {
        if (!this.map.has(key)) return -1
        const node = this.map.get(key)
        this.update(node)
        return node.value
    }
    put(key: number, value: number): void {
        // if capacity is 0, don't do anything
        if (this.capacity == 0) return;

        // if we already have such key
        if (this.map.has(key)) {
            const node = this.map.get(key)
            this.update(node)
            node.value = value
            return;
        }
        // if we exceed the capacity
        if (this.map.size == this.capacity) {
            const node = this.list.popLeft()
            this.map.delete(node.key)
        }

        // create new node
        const newNode = new Node(key, value)
        this.map.set(key, newNode)
        this.list.pushRight(newNode)
    }
}