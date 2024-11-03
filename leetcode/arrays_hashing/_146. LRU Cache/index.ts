class LRUCache {
    public map
    public LRU: number[]
    public length = 0
    public pointer = 0
    constructor(capacity: number) {
        this.length = capacity
        this.map = new Map()
        this.LRU = []
    }

    get(key: number): number {
        if (this.map.size < this.length) {
            this.LRU.push(key)
        } else {
            this.LRU[this.pointer++] = key
        }
        return this.map.get(key) || -1
    }

    put(key: number, value: number): void {
        this.map.set(key, value)
        if (this.map.size < this.length) {
            this.LRU.push(key)
        } else {
            this.LRU[this.pointer++] = key
            this.map.delete(this.LRU[this.pointer])
            console.log(this.map);
            console.log(this.LRU);
            
        }
    }
}
