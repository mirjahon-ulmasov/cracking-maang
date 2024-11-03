/*
Nick likes to play the lottery. The cost of a single lottery ticket is price. Nick has exactly four banknotes with values b1, b2, b3 and b4 (some of the values may be equal). He wants to know if it's possible to buy a single lottery ticket without getting any change back. In other words, he wants to pay the exact price of a ticket using any subset of his banknotes. Return "POSSIBLE" if it is possible or "IMPOSSIBLE" if it is not (all quotes for clarity).
*/

function buy(p: number, b1: number, b2: number, b3: number, b4: number) {
    const arr = [b1, b2, b3, b4]
    const N = arr.length
    for (let msk = 1; msk < 1 << N; msk++) {
        let sum = 0
        for (let i = 0; i < N; i++) {
            if (msk & (1 << i)) {
                sum += arr[i]
            }
        }
        if (sum == p) return "POSSIBLE"
    }
    return "IMPOSSIBLE"
}

console.log(buy(7, 4, 5, 2, 1));
console.log(buy(12, 6, 10, 2, 7));
console.log(buy(25, 12, 5, 2, 1));