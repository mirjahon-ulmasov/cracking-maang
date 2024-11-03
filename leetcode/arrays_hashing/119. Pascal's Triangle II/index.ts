/*
Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.
In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

Example 1:
Input: rowIndex = 3
Output: [1,3,3,1]

Example 2:
Input: rowIndex = 0
Output: [1]

Example 3:
Input: rowIndex = 1
Output: [1,1]
*/

function getRow(rowIndex: number): number[] {
    let rowIndexth = [1];
    for (let i = 0; i < rowIndex; i++) {
        const newRow = [1];

        for (let j = 0; j < rowIndexth.length - 1; j++) {
            newRow.push(rowIndexth[j] + rowIndexth[j + 1]);
        }

        newRow.push(1);
        rowIndexth = newRow;
    }
    return rowIndexth;
}


function getRow2(rowIndex: number): number[] {
    let rowIndexth = [1];
    for (let i = 0; i < rowIndex; i++) {
        const newRow = new Array(rowIndexth.length + 1).fill(0)

        for (let j = 0; j < rowIndexth.length; j++) {
            newRow[j] += rowIndexth[j]
            newRow[j + 1] += rowIndexth[j]
        }
        rowIndexth = newRow;
    }
    return rowIndexth;
}
