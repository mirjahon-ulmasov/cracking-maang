// ---------------- SOLUTION 1 ----------------
function isMonotonic(nums: number[]): boolean {
    let increase = true;
    let decrease = true;
    for (let i = 0; i < nums.length - 1; i++) {
        // if it is not monotone decreasing
        if (nums[i] < nums[i + 1]) {
            decrease = false;
        }
        // if it is not monotone increasing
        else if (nums[i] > nums[i + 1]) {
            increase = false;
        }
    }
    return increase || decrease;
}

// ---------------- SOLUTION 2 ----------------
function isMonotonic2(nums: number[]): boolean {
    // Check if it is monotone decreasing
    if (nums[0] > nums[nums.length - 1]) {
        for (let i = 0; i < nums.length - 1; i++) {
            // if it is not monotone decreasing
            if (nums[i] < nums[i + 1]) return false;
        }
    } else {
        for (let i = 0; i < nums.length - 1; i++) {
            // if it is not monotone increasing
            if (nums[i] > nums[i + 1]) return false;
        }
    }
    return true;
}
