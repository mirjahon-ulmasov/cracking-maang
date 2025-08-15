/*
You are given a tree with n nodes numbered from 0 to n - 1 in the form of a parent array parent where parent[i] is the parent of the ith node. The root of the tree is node 0, so parent[0] = -1 since it has no parent. You want to design a data structure that allows users to lock, unlock, and upgrade nodes in the tree.

The data structure should support the following functions:

Lock: Locks the given node for the given user and prevents other users from locking the same node. You may only lock a node using this function if the node is unlocked.
Unlock: Unlocks the given node for the given user. You may only unlock a node using this function if it is currently locked by the same user.
Upgrade: Locks the given node for the given user and unlocks all of its descendants regardless of who locked it. You may only upgrade a node if all 3 conditions are true:
The node is unlocked,
It has at least one locked descendant (by any user), and
It does not have any locked ancestors.
Implement the LockingTree class:

LockingTree(int[] parent) initializes the data structure with the parent array.
lock(int num, int user) returns true if it is possible for the user with id user to lock the node num, or false otherwise. If it is possible, the node num will become locked by the user with id user.
unlock(int num, int user) returns true if it is possible for the user with id user to unlock the node num, or false otherwise. If it is possible, the node num will become unlocked.
upgrade(int num, int user) returns true if it is possible for the user with id user to upgrade the node num, or false otherwise. If it is possible, the node num will be upgraded.
*/
// @ts-nocheck
class LockingTree {
    nodes: Array<number>
    childToParent: Array<number>
    parentToChild: Map<number, number[]>
    constructor(parent: number[]) {
        this.nodes = new Array(parent.length).fill(0)
        this.childToParent = parent
        this.parentToChild = new Map<number, number[]>()
        for (let i = 0; i < parent.length; i++) {
            if (!this.parentToChild.has(parent[i])) {
                this.parentToChild.set(parent[i], [])
            }
            this.parentToChild.get(parent[i]).push(i)
        }
    }

    lock(num: number, user: number): boolean {
        if (this.nodes[num] == 0) {
            this.nodes[num] = user
            return true
        }
        return false
    }

    unlock(num: number, user: number): boolean {
        if (this.nodes[num] == user) {
            this.nodes[num] = 0
            return true
        }
        return false
    }

    upgrade(num: number, user: number): boolean {
        if (this.hasLockedAncestors(num)) return false
        if (!this.hasLockedDescendant(num)) return false

        this.nodes[num] = user
        this.unlockDescendant(num)
        return true
    }

    hasLockedAncestors(node: number): boolean {
        while (node != -1) {
            if (this.nodes[node] != 0) return true
            node = this.childToParent[node]
        }
        return false
    }
    hasLockedDescendant(node: number): boolean {
        for (let child of this.parentToChild.get(node) || []) {
            if (this.nodes[child] != 0) return true
            if (this.hasLockedDescendant(child)) return true
        }
        return false
    }
    unlockDescendant(node: number): void {
        for (let child of this.parentToChild.get(node) || []) {
            this.nodes[child] = 0
            this.unlockDescendant(child)
        }
    }
}