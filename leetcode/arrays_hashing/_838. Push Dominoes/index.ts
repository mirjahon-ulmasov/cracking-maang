/*
There are n dominoes in a line, and we place each domino vertically upright. In the beginning, we simultaneously push some of the dominoes either to the left or to the right.

After each second, each domino that is falling to the left pushes the adjacent domino on the left. Similarly, the dominoes falling to the right push their adjacent dominoes standing on the right.

When a vertical domino has dominoes falling on it from both sides, it stays still due to the balance of the forces.

For the purposes of this question, we will consider that a falling domino expends no additional force to a falling or already fallen domino.

You are given a string dominoes representing the initial state where:

dominoes[i] = 'L', if the ith domino has been pushed to the left,
dominoes[i] = 'R', if the ith domino has been pushed to the right, and
dominoes[i] = '.', if the ith domino has not been pushed.
Return a string representing the final state.

Example 1:
Input: dominoes = "RR.L"
Output: "RR.L"
Explanation: The first domino expends no additional force on the second domino.

Example 2:
Input: dominoes = ".L.R...LR..L.."
Output: "LL.RR.LLRRLL.."

Constraints:

n == dominoes.length
1 <= n <= 105
dominoes[i] is either 'L', 'R', or '.'.
*/

// Each domino can be forced by left and right side,
// If both side has same force, then it stays still
// Time: O(n) Space: O(n)
function pushDominoes(dominoes: string): string {
    const N = dominoes.length
    const LForce = new Array(N).fill(0)
    const RForce = new Array(N).fill(0)
    let force = 0

    // Right Force
    for (let i = 0; i < N; i++) {
        if (dominoes[i] == "R") force = N
        else if (dominoes[i] == "L") force = 0
        else force = Math.max(force - 1, 0)
        RForce[i] = force
    }
    force = 0
    // Left Force
    for (let i = N - 1; i >= 0; i--) {
        if (dominoes[i] == "L") force = N
        else if (dominoes[i] == "R") force = 0
        else force = Math.max(force - 1, 0)
        LForce[i] = force
    }
    let result = ""
    for (let i = 0; i < N; i++) {
        if (LForce[i] > RForce[i]) result += "L"
        else if (LForce[i] < RForce[i]) result += "R"
        else result += "."
    }
    return result
}

// It uses Queue
function pushDominoes2(dominoes: string): string {
    const arr = dominoes.split("")
    const queue: { value: string; index: number }[] = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == ".") continue
        queue.push({ value: arr[i], index: i })
    }
    while (queue.length > 0) {
        const data = queue.shift()
        if (!data) break
        const { value, index } = data
        if (value == "L" && index > 0 && arr[index - 1] == ".") {
            arr[index - 1] = "L"
            queue.push({ value: "L", index: index - 1 })
        } else if (value == "R") {
            if (index + 1 < arr.length && arr[index + 1] == ".") {
                if (index + 2 < arr.length && arr[index + 2] == "L") {
                    queue.shift()
                } else {
                    arr[index + 1] = "R"
                    queue.push({ value: "R", index: index + 1 })
                }
            }
        }
    }
    return arr.join("")
}
console.log(pushDominoes(".L.R...LR..L..")) // "LL.RR.LLRRLL..
console.log(pushDominoes2(".L.R...LR..L..")) // "LL.RR.LLRRLL..
