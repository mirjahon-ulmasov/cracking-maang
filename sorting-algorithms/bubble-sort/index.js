// Bubble sort
function bubbleSort(nums) {
    let swapped
    function swap(i, j) {
        const temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp
    }
    for (let i = 0; i < nums.length - 1; i++) {
        swapped = false
        for (let j = 0; j < nums.length - i - 1; j++) {
            if (nums[j] > nums[j + 1]) {
                swap(j, j + 1)
                swapped = true
            }
        }
        // IF no two elements were swapped by inner loop, then break
        if (!swapped) break
    }
    return nums
}

console.log(bubbleSort([3, 30, 34, 5, 9]))
