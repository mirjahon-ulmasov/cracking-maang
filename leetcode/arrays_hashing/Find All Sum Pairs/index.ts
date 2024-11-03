function findSumPairs(arr: number[], num: number) {
    const result: number[][] = []
    const set = new Set()

    for (let n of arr) {
        const diff = num - n
        if (set.has(diff)) {
            result.push([diff, n])
        }
        set.add(n)
    }
    return result
}

console.log(findSumPairs([1, -9, 2, 4, 6, 4, -11], 8))
