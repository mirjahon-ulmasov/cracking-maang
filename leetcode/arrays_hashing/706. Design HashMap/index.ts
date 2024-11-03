class MyListNode {
    public key: number;
    public value: number;
    public next: MyListNode | null;
    constructor(key: number, value: number) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
}

class MyHashMap {
    private map: MyListNode[];
    constructor() {
        this.map = [];
        for (let i = 0; i < 1000; i++) {
            this.map.push(new MyListNode(0, 0));
        }
    }

    put(key: number, value: number): void {
        const index = key % this.map.length;
        let currentNode = this.map[index];
        while (currentNode.next) {
            if (currentNode.next.key === key) {
                currentNode.next.value = value;
                return;
            }
            currentNode = currentNode.next;
        }
        currentNode.next = new MyListNode(key, value);
    }

    get(key: number): number {
        const index = key % this.map.length;
        let currentNode = this.map[index];
        while (currentNode.next) {
            if (currentNode.next.key === key) {
                return currentNode.next.value;
            }
            currentNode = currentNode.next;
        }
        return -1;
    }

    remove(key: number): void {
        const index = key % this.map.length;
        let currentNode = this.map[index];
        while (currentNode.next) {
            if (currentNode.next.key === key) {
                currentNode.next = currentNode.next.next;
                return;
            }
            currentNode = currentNode.next;
        }
    }
}

const myHashMap = new MyHashMap();
myHashMap.put(1, 1);                // The map is now [[1,1]]
myHashMap.put(2, 2);                // The map is now [[1,1], [2,2]]
console.log(myHashMap.get(1));      // return 1, The map is now [[1,1], [2,2]]
console.log(myHashMap.get(3));      // return -1 (i.e., not found), The map is now [[1,1], [2,2]]
myHashMap.put(2, 1);                // The map is now [[1,1], [2,1]] (i.e., update the existing value)
console.log(myHashMap.get(2));      // return 1, The map is now [[1,1], [2,1]]
myHashMap.remove(2);                // remove the mapping for 2, The map is now [[1,1]]
console.log(myHashMap.get(2));      // return -1 (i.e., not found), The map is now [[1,1]]