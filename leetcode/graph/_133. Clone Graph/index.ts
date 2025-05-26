/*
Given a reference of a node in a connected undirected graph.
Return a deep copy (clone) of the graph.
Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.

class Node {
    public int val;
    public List<Node> neighbors;
}

Test case format:

For simplicity, each node's value is the same as the node's index (1-indexed).
For example, the first node with val == 1, the second node with val == 2, and so on.
The graph is represented in the test case using an adjacency list.
An adjacency list is a collection of unordered lists used to represent a finite graph.
Each list describes the set of neighbors of a node in the graph.
The given node will always be the first node with val = 1.
You must return the copy of the given node as a reference to the cloned graph
*/

import { _Node } from ".."

function cloneGraph(node: _Node | null): _Node | null {
    if (node == null) return null
    const map = new Map<_Node, _Node>()
    function dfs(nod: _Node): _Node {
        if (map.has(nod)) return map.get(nod)!

        const copyNode = new _Node(nod.val)
        map.set(nod, copyNode)

        for (let neighbor of nod.neighbors) {
            copyNode.neighbors.push(dfs(neighbor))
        }
        return copyNode
    }

    return dfs(node)
}
