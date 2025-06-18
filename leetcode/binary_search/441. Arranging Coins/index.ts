/*
You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase may be incomplete.

Given the integer n, return the number of complete rows of the staircase you will build.
*/

function arrangeCoins(n: number): number {
    let L = 0, R = n, result = 0
    while (L <= R) {
        const M = Math.floor((L + R) / 2)
        const needCoins = (M * (M + 1)) / 2
        if (n >= needCoins) {
            result = M
            L = M + 1
        } else {
            R = M - 1
        }
    }
    return result
}

function _arrangeCoins(n: number): number {
    let rows = 1
    while (n >= rows) {
        n -= rows
        rows++
    }
    return rows - 1
};