function subarraysWithKDistinct(nums: number[], k: number): number {
    function helper(target: number) {
        const map = new Map()
        let L = 0, count = 0
        for (let R = 0; R < nums.length; R++) {
            map.set(nums[R], (map.get(nums[R]) || 0) + 1)
            while (map.size > target) {
                map.set(nums[L], map.get(nums[L]) - 1)
                if (map.get(nums[L]) == 0) {
                    map.delete(nums[L])
                }
                L++
            }
            count += (R + 1 - L)
        }
        return count
    }

    return helper(k) - helper(k - 1)
}
