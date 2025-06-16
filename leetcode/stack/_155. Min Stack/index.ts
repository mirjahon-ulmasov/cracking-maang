/*
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

MinStack() initializes the stack object.
- void push(int val) pushes the element val onto the stack.
- void pop() removes the element on the top of the stack.
- int top() gets the top element of the stack.
- int getMin() retrieves the minimum element in the stack.

You must implement a solution with O(1) time complexity for each function.
*/

// @ts-nocheck
class MinStack {
    public stack: number[]
    public minStack: number[]

    constructor() {
        this.stack = []
        this.minStack = []
    }

    push(val: number): void {
        this.stack.push(val)
        if (this.minStack.length > 0) {
            this.minStack.push(Math.min(this.minStack.at(-1), val))
        } else {
            this.minStack.push(val)
        }
    }

    pop(): void {
        this.stack.pop()
        this.minStack.pop()
    }

    top(): number {
        return this.stack.at(-1)
    }

    getMin(): number {
        console.log(this.minStack)
        return this.minStack.at(-1)
    }
}