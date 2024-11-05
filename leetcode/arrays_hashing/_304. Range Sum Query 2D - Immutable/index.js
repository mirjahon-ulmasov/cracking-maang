/*
Given a 2D matrix matrix, handle multiple queries of the following type:

Calculate the sum of the elements of matrix inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).
Implement the NumMatrix class:

NumMatrix(int[][] matrix) Initializes the object with the integer matrix matrix.
int sumRegion(int row1, int col1, int row2, int col2) Returns the sum of the elements of matrix inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).
You must design an algorithm where sumRegion works on O(1) time complexity.


Example 1:
Input
["NumMatrix", "sumRegion", "sumRegion", "sumRegion"]
[[[[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]]], [2, 1, 4, 3], [1, 1, 2, 2], [1, 2, 2, 4]]
Output
[null, 8, 11, 12]

Explanation
NumMatrix numMatrix = new NumMatrix([[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]]);
numMatrix.sumRegion(2, 1, 4, 3); // return 8 (i.e sum of the red rectangle)
numMatrix.sumRegion(1, 1, 2, 2); // return 11 (i.e sum of the green rectangle)
numMatrix.sumRegion(1, 2, 2, 4); // return 12 (i.e sum of the blue rectangle)
*/
var NumMatrix = /** @class */ (function () {
    function NumMatrix(matrix) {
        this.matrx = Array.from({ length: matrix.length }, function () { return []; });
        for (var row = 0; row < matrix.length; row++) {
            var total = 0;
            for (var col = 0; col < matrix[row].length; col++) {
                total += matrix[row][col];
                this.matrx[row][col] = total;
            }
        }
    }
    // Time: O(n)
    NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
        var total = 0;
        var right = col2;
        var left = Math.max(col1 - 1, 0);
        for (var row = row1; row <= row2; row++) {
            var rowSum = this.matrx[row][right] - this.matrx[row][left];
            total += rowSum;
        }
        return total;
    };
    return NumMatrix;
}());
var _NumMatrix = /** @class */ (function () {
    function _NumMatrix(matrix) {
        this.matrx = Array.from({ length: matrix.length }, function () { return []; });
        var total = 0;
        for (var col = 0; col < matrix[0].length; col++) {
            total += matrix[0][col];
            this.matrx[0][col] = total;
        }
        total = 0;
        for (var row = 0; row < matrix.length; row++) {
            total += matrix[row][0];
            this.matrx[row][0] = total;
        }
        /*
        Our matrix now:
        [*,*,*,*]
        [*,_,_,_]
        [*,_,_,_]
        [*,_,_,_]
        */
        // We use Prefix Sum Matrix (2D Array)
        for (var row = 1; row < matrix.length; row++) {
            for (var col = 1; col < matrix[row].length; col++) {
                var value = this.matrx[row - 1][col] +
                    this.matrx[row][col - 1] -
                    this.matrx[row - 1][col - 1] +
                    matrix[row][col];
                this.matrx[row][col] = value;
            }
        }
    }
    // Time: O(1)
    _NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
        var total = this.matrx[row2][col2] -
            this.matrx[row1 - 1][col2] -
            (this.matrx[row2][col1 - 1] - this.matrx[row1 - 1][col1 - 1]);
        return total;
    };
    return _NumMatrix;
}());
var numMatrix = new _NumMatrix([
    [3, 0, 1, 4, 2],
    [5, 6, 3, 2, 1],
    [1, 2, 0, 1, 5],
    [4, 1, 0, 1, 7],
    [1, 0, 3, 0, 5],
]);
console.log(numMatrix.sumRegion(2, 1, 4, 3)); // return 8 (i.e sum of the red rectangle)
console.log(numMatrix.sumRegion(1, 1, 2, 2)); // return 11 (i.e sum of the green rectangle)
console.log(numMatrix.sumRegion(1, 2, 2, 4)); // return 12 (i.e sum of the blue rectangle)
