import json from "./2-data.js"
import { fetchData } from "./fetch.js"

// const data = await fetchData(
//     "https://adventofcode.com/2024/day/2/input",
//     "53616c7465645f5fb55ff402d4dafbdf1a38c948edafc71583ab9432fd84d3390ef2bd3874f128497fa6c467928d564ee3da9454736c8b266ee033afee17dd8c"
// )

const arr = json.split("\n")
const count = arr.reduce((acc, cur) => {
    const curArr = cur.split(" ").map(Number)
    let increase = true, decrease = true, isRemoved = false
    for (let i = 0; i < curArr.length - 1; i++) {
        if (curArr[i] <= curArr[i + 1]) {
            if (curArr[i + 1] - curArr[i] > 3 || curArr[i + 1] - curArr[i] < 1) {
                return acc
            }
            decrease = false
        } else if (curArr[i] >= curArr[i + 1]) {
            if (curArr[i] - curArr[i + 1] > 3 || curArr[i] - curArr[i + 1] < 1) {
                return acc
            }
            increase = false
        }
    }
    if (increase || decrease) {
        return acc + 1
    }
    return acc
}, 0)

console.log(count)
