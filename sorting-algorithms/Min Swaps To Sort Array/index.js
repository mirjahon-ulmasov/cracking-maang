function minSwapsToSortArr(nums) {
    const sortedArr = [...nums].sort((a, b) => a - b)
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], i)
    }

    let swaps = 0
    for (let i = 0; i < nums.length; i++) {
        if (sortedArr[i] != nums[i]) {
            let idx = (map.get(sortedArr[i])[(nums[i], nums[idx])] = [
                nums[idx],
                nums[i],
            ])

            map.set(nums[i], i)
            map.set(nums[idx], idx)

            swaps++
        }
    }
    return swaps
}

function _minSwapsToSortArr(nums) {
    const indexed = nums.map((el, idx) => [el, idx])
    const visited = new Array(nums.length).fill(false)
    indexed.sort((a, b) => a - b)

    let swaps = 0
    for (let i = 0; i < nums.length; i++) {
        if (visited[i] || indexed[i][1] == i) continue;

        let cycleSize = 0, j = i
        while (!visited[j]) {
            visited[j] = true

            j = indexed[j][1]
            cycleSize++
        }

        if (cycleSize > 1) swaps += (cycleSize - 1)
    }
    return swaps
}
console.log(minSwapsToSortArr([5, 1, 3, 2]))
