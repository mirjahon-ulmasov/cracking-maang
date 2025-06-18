/*
Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).

Implement the MyStack class:

void push(int x) Pushes element x to the top of the stack.
int pop() Removes the element on the top of the stack and returns it.
int top() Returns the element on the top of the stack.
boolean empty() Returns true if the stack is empty, false otherwise.
Notes:

You must use only standard operations of a queue, which means that only push to back, peek/pop from front, size and is empty operations are valid.
Depending on your language, the queue may not be supported natively. You may simulate a queue using a list or deque (double-ended queue) as long as you use only a queue's standard operations.
 
Example 1:
Input
["MyStack", "push", "push", "top", "pop", "empty"]
[[], [1], [2], [], [], []]

Output
[null, null, null, 2, 2, false]

Explanation
MyStack myStack = new MyStack();
myStack.push(1);
myStack.push(2);
myStack.top(); // return 2
myStack.pop(); // return 2
myStack.empty(); // return False
*/

class MyStack {
    public queue: number[]
    constructor() {
        this.queue = []
    }

    // O(1)
    push(x: number): void {
        this.queue.push(x)
    }

    // O(N)
    pop(): number {
        const length = this.queue.length
        for (let i = 0; i < length - 1; i++) {
            this.push(this.queue.shift()!)
        }
        return this.queue.shift()!
    }

    // O(N)
    top(): number {
        const last = this.pop()
        this.push(last)
        return last
    }

    // O(1)
    empty(): boolean {
        return !this.queue.length
    }
}

class _MyStack {
    public queue: number[]
    constructor() {
        this.queue = []
    }

    // O(N)
    push(x: number): void {
        this.queue.push(x)
        for (let i = 0; i < this.queue.length - 1; i++) {
            this.queue.push(this.queue.shift()!)
        }
    }

    // O(1)
    pop(): number {
        return this.queue.shift()!
    }

    // O(1)
    top(): number {
        return this.queue[0]
    }

    // O(1)
    empty(): boolean {
        return !this.queue.length
    }
}