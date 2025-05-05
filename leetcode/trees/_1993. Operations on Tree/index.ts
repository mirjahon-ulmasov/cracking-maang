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
interface Node {
    parentID: number
    userID: number | null
}
class LockingTree {
    public nodes: Map<number, Node>
    public children: Map<number, number[]>
    constructor(parent: number[]) {
        this.nodes = new Map()
        this.children = new Map()

        for (let i = 0; i < parent.length; i++) {
            this.nodes.set(i, { parentID: parent[i], userID: null })

            if (!this.children.has(parent[i])) this.children.set(parent[i], [])
            this.children.get(parent[i])!.push(i)
        }
    }
    lock(num: number, user: number): boolean {
        if (!this.nodes.has(num)) return false
        const node = this.nodes.get(num)
        if (node.userID != null) return false
        node.userID = user
        return true
    }
    unlock(num: number, user: number): boolean {
        if (!this.nodes.has(num)) return false
        const node = this.nodes.get(num)
        if (node.userID != user) return false
        node.userID = null
        return true
    }
    upgrade(num: number, user: number): boolean {
        if (!this.checkAncestor(num)) return false
        if (!this.checkDescendant(num)) return false

        this.updateDescendant(num)
        const node = this.nodes.get(num)
        node.userID = user
        return true
    }
    checkAncestor(val: number): boolean {
        while (val != -1) {
            const node = this.nodes.get(val)
            if (node.userID != null) return false
            val = node.parentID
        }
        return true
    }
    checkDescendant(val: number): boolean {
        for (let child of this.children.get(val) || []) {
            const childNode = this.nodes.get(child)

            if (childNode.userID) return true
            if (this.checkDescendant(child)) return true
        }
        return false
    }
    updateDescendant(val: number): void {
        for (let child of this.children.get(val) || []) {
            const childNode = this.nodes.get(child)
            childNode.userID = null
            this.updateDescendant(child)
        }
    }
}