/*
You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.
*/

type Params = [number, number]

function rotate(matrix: number[][]): void {
    const n = matrix.length
    function swap([r1, c1]: Params, [r2, c2]: Params) {
        const temp = matrix[r1][c1]
        matrix[r1][c1] = matrix[r2][c2]
        matrix[r2][c2] = temp
    }

    for (let row = 0; row < n; row++) {
        for (let col = row + 1; col < n; col++) {
            swap([row, col], [col, row])
        }
    }
    for (let row = 0; row < n; row++) {
        for (let col = 0; col < Math.floor(n / 2); col++) {
            swap([row, col], [row, n - 1 - col])
        }
    }
};