function insertionSort(nums) {
    for (let i = 1; i < nums.length; i++) {
        let cur = nums[i]
        let j = i - 1
        while (j >= 0 && nums[j] > cur) {
            nums[j + 1] = nums[j]
            j--
        }
        nums[j + 1] = cur
    }
    return nums
}

console.log(insertionSort([4, 2]))
console.log(insertionSort([4, 2, 1]))
console.log(insertionSort([4, 2, 1, 3, 5, 2, 6, 9, 8, 7]))