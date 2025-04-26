class LFUNode {
    public val: number
    public prev: LFUNode | null
    public next: LFUNode | null
    constructor(val: number, prev?: LFUNode, next?: LFUNode) {
        this.val = val
        this.prev = prev ?? null
        this.next = next ?? null
    }
}

class LFULinkedList {
    public left: LFUNode
    public right: LFUNode
    public map: Map<number, LFUNode>
    constructor() {
        this.left = new LFUNode(0)
        this.right = new LFUNode(0)
        this.right.prev = this.left
        this.left.next = this.right
        this.map = new Map()
    }

    length() {
        return this.map.size
    }

    pushRight(key: number) {
        let node = new LFUNode(key, this.right.prev as LFUNode, this.right)
        this.map.set(key, node)
        let prevRight = this.right.prev as LFUNode
        prevRight.next = node
        this.right.prev = node
    }

    pop(key: number) {
        if (this.map.has(key)) {
            let node = this.map.get(key) as LFUNode
            let prevNode = node.prev as LFUNode
            let nextNode = node.next as LFUNode
            prevNode.next = nextNode
            nextNode.prev = prevNode
            this.map.delete(key)
        }
    }

    popLeft() {
        let key = this.left.next?.val as number
        this.pop(key)
        return key
    }

    update(key: number) {
        this.pop(key)
        this.pushRight(key)
    }
}

class LFUCache {
    cap: number
    lfuCnt: number
    valMap: Map<number, number>
    cntMap: Map<number, number>
    listMap: Map<number, LFULinkedList>
    constructor(capacity: number) {
        this.cap = capacity
        this.lfuCnt = 0
        this.valMap = new Map()
        this.cntMap = new Map()
        this.listMap = new Map()
    }

    counter(key: number) {
        let count = this.cntMap.get(key) || 0
        this.cntMap.set(key, count + 1)

        this.listMap.get(count)?.pop(key)
        this.listMap.get(count)?.pushRight(key)

        if (count == this.lfuCnt && this.listMap.get(count)?.length() == 0) {
            this.lfuCnt++
        }
    }

    get(key: number): number {
        if (this.valMap.has(key)) {
            this.counter(key)
            return this.valMap.get(key) as number
        }
        return -1
    }

    put(key: number, value: number): void {
        if (this.cap == 0) {
            return
        }
        if(!this.valMap.has(key) && this.valMap.size == this.cap) {
            let removedKey = this.listMap.get(this.lfuCnt)?.popLeft() as number
            this.valMap.delete(removedKey)
            this.cntMap.delete(removedKey)
        }

        this.valMap.set(key, value)
        this.counter(key)
        this.lfuCnt = Math.min(this.lfuCnt, this.cntMap.get(key) as number)
    }
}
