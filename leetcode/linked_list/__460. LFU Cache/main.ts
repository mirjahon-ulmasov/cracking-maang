class _Node {
    key: number
    val: number
    freq: number
    prev: _Node | null
    next: _Node | null
    constructor(key: number, val: number) {
        this.key = key
        this.val = val
        this.freq = 1
        this.prev = null
        this.next = null
    }
}

class _LinkedList {
    left: _Node
    right: _Node
    constructor() {
        this.left = new _Node(0, 0)
        this.right = new _Node(0, 0)
        this.left.next = this.right
        this.right.prev = this.left
    }
    isEmpty() {
        return this.left.next = this.right
    }
    pushRight(node: _Node) {
        node.prev = this.right.prev
        node.next = this.right
        this.right.prev.next = node
        this.right.prev = node
    }
    pop(node: _Node) {
        let prev = node.prev
        let next = node.next
        prev.next = next
        next.prev = prev
    }
    popLeft() {
        let removed = this.left.next
        this.pop(removed)
        return removed
    }
}

class _LFUCache {
    public capacity: number
    public LFU: number
    public keyToNode: Map<number, _Node>
    public freqToLinkedList: Map<number, _LinkedList>
    constructor(capacity: number) {
        this.capacity = capacity
        this.LFU = 0
        this.keyToNode = new Map()
        this.freqToLinkedList = new Map()
    }
    updateFreq(node: _Node) {
        let oldFreq = node.freq
        node.freq++

        let oldFreqList = this.freqToLinkedList.get(oldFreq)
        oldFreqList?.pop(node)
        if (oldFreqList?.isEmpty()) {
            this.freqToLinkedList.delete(oldFreq)
            if (oldFreq == this.LFU) {
                this.LFU++
            }
        }
        if (!this.freqToLinkedList.has(node.freq)) {
            this.freqToLinkedList.set(node.freq, new _LinkedList())
        }
        this.freqToLinkedList.get(node.freq).pushRight(node)
    }
    get(key: number): number {
        if (!this.keyToNode.has(key)) {
            return -1
        }
        let node = this.keyToNode.get(key)
        this.updateFreq(node)
        return node.val
    }
    put(key: number, value: number): void {
        if (this.capacity == 0) return;

        // If there is already same key
        if (this.keyToNode.has(key)) {
            let node = this.keyToNode.get(key)
            this.updateFreq(node)
            this.keyToNode.set(key, node)
            return;
        }

        // If capacity is full
        if (this.keyToNode.size >= this.capacity) {
            let lfuList = this.freqToLinkedList.get(this.LFU)
            let node = lfuList.popLeft()
            this.keyToNode.delete(node.key)
            if (lfuList.isEmpty()) {
                this.freqToLinkedList.delete(this.LFU)
                this.LFU++
            }
        }

        let newNode = new _Node(key, value)
        this.keyToNode.set(key, newNode)
        this.LFU = 1
        if (!this.freqToLinkedList.has(1)) {
            this.freqToLinkedList.set(1, new _LinkedList())
        }
        this.freqToLinkedList.get(1).pushRight(newNode)
    }
}