import { _Node } from './../index';
/*
Given a n * n matrix grid of 0's and 1's only. We want to represent grid with a Quad-Tree.

Return the root of the Quad-Tree representing grid.

A Quad-Tree is a tree data structure in which each internal node has exactly four children. Besides, each node has two attributes:

val: True if the node represents a grid of 1's or False if the node represents a grid of 0's. Notice that you can assign the val to True or False when isLeaf is False, and both are accepted in the answer.
isLeaf: True if the node is a leaf node on the tree or False if the node has four children.
class Node {
    public boolean val;
    public boolean isLeaf;
    public Node topLeft;
    public Node topRight;
    public Node bottomLeft;
    public Node bottomRight;
}
We can construct a Quad-Tree from a two-dimensional area using the following steps:

If the current grid has the same value (i.e all 1's or all 0's) set isLeaf True and set val to the value of the grid and set the four children to Null and stop.
If the current grid has different values, set isLeaf to False and set val to any value and divide the current grid into four sub-grids as shown in the photo.
Recurse for each of the children with the proper sub-grid.
*/

function construct(grid: number[][]): _Node | null {
    function dfs(length: number, row: number, col: number): _Node {
        const value = grid[row][col]
        let isSame = true
        outer: for (let i = 0; i < length; i++) {
            for (let j = 0; j < length; j++) {
                if (grid[row + i][col + j] != value) {
                    isSame = false
                    break outer;
                }
            }
        }

        if (isSame) return new _Node(Boolean(value), true)

        length /= 2
        const topLeft = dfs(length, row, col)
        const topRight = dfs(length, row, col + length)
        const bottomLeft = dfs(length, row + length, col)
        const bottomRight = dfs(length, row + length, col + length)

        return new _Node(false, false, topLeft, topRight, bottomLeft, bottomRight)
    }
    return dfs(grid.length, 0, 0)
};