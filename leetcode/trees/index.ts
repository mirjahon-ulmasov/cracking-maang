export class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val
        this.left = left === undefined ? null : left
        this.right = right === undefined ? null : right
    }
}

export class _Node {
    val: boolean
    isLeaf: boolean
    topLeft: _Node | null
    topRight: _Node | null
    bottomLeft: _Node | null
    bottomRight: _Node | null
    constructor(
        val?: boolean,
        isLeaf?: boolean,
        topLeft?: _Node,
        topRight?: _Node,
        bottomLeft?: _Node,
        bottomRight?: _Node
    ) {
        this.val = val === undefined ? false : val
        this.isLeaf = isLeaf === undefined ? false : isLeaf
        this.topLeft = topLeft === undefined ? null : topLeft
        this.topRight = topRight === undefined ? null : topRight
        this.bottomLeft = bottomLeft === undefined ? null : bottomLeft
        this.bottomRight = bottomRight === undefined ? null : bottomRight
    }
}
