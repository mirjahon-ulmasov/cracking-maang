/*
You are given an m x n integer matrix matrix with the following two properties:

Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.

Example: 1
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true
*/

function searchMatrix(matrix: number[][], target: number): boolean {
    const ROWS = matrix.length, COLS = matrix[0].length
    let Lrow = 0, Rrow = ROWS - 1
    while (Lrow <= Rrow) {
        const Mrow = Math.floor((Lrow + Rrow) / 2)

        let Lcol = 0, Rcol = COLS - 1
        while (Lcol <= Rcol) {
            const Mcol = Math.floor((Lcol + Rcol) / 2)

            const guess = matrix[Mrow][Mcol]
            if (guess == target) return true
            else if (guess > target) Rcol = Mcol - 1
            else Lcol = Mcol + 1
        }

        if (Lcol > 0) Lrow = Mrow + 1
        else Rrow = Mrow - 1
    }
    return false
};