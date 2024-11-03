class MListNode {
    public key: number;
    public next: MListNode | null

    constructor(key: number) {
        this.key = key
        this.next = null 
    }
}

class MHashSet {
    public set: MListNode[]
    constructor() {
        this.set = []
        for (let i = 0; i < 1000; i++) {
            this.set.push(new MListNode(0))
        }
    }

    private getCurrentNode(key: number) {
        const index = key % this.set.length
        return this.set[index]
    }

    add(key: number): void {
        let currentNode = this.getCurrentNode(key)

        while(currentNode.next) {
            if(currentNode.next.key === key) {
                return;
            }
            currentNode = currentNode.next
        }
        currentNode.next = new MListNode(key)
    }

    remove(key: number): void {
        let currentNode = this.getCurrentNode(key)

        while(currentNode.next) {
            if(currentNode.next.key === key) {
                currentNode.next = currentNode.next.next
                return;
            }
            currentNode = currentNode.next
        }
    }

    contains(key: number): boolean {
        let currentNode = this.getCurrentNode(key)

        while(currentNode.next) {
            if(currentNode.next.key === key) {
                return true
            }
            currentNode = currentNode.next
        }
        return false
    }
}

const set = new MHashSet()
set.add(7)
set.add(17)
set.add(24)
set.add(707)
set.add(70007)
console.log('24:', set.contains(24));       // true
console.log('70007:', set.contains(70007)); // true

set.remove(15)
set.remove(23)
set.remove(24)
console.log('24:', set.contains(24));       // false
console.log('17:', set.contains(17));       // true
