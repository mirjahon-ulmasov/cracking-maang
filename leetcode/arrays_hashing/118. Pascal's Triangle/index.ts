/*
Given an integer numRows, return the first numRows of Pascal's triangle.
In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

Example 1:
Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

Example 2:
Input: numRows = 1
Output: [[1]]
*/

function generate(numRows: number): number[][] {
    const result = [[1]]
    for (let row = 0; row < numRows - 1; row++) {
        const curRow = [1]
        for (let col = 0; col < result[row].length - 1; col++) {
            curRow.push(result[row][col] + result[row][col + 1])
        }
        curRow.push(1)
        result.push(curRow)
    }
    return result
};

function _generate(numRows: number): number[][] {
    const res = [[1]];
    for (let i = 1; i < numRows; i++) {
        const temp = [...res[i - 1]];
        temp.push(0);
        temp.unshift(0);
        const newRow = [];
        for (let j = 0; j < temp.length - 1; j++) {
            newRow.push(temp[j] + temp[j + 1]);
        }
        res.push(newRow);
    }
    return res;
}

function __generate(numRows: number): number[][] {
    const result = [[1]];
    if (numRows === 1) {
        return result;
    }
    for (let i = 1; i < numRows; i++) {
        const oldRow = result[i - 1];
        const newRow = [1];
        for (let j = 0; j < oldRow.length - 1; j++) {
            newRow.push(oldRow[j] + oldRow[j + 1]);
        }
        newRow.push(1);
        result.push(newRow);
    }
    return result;
}
