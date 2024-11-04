/*
Given a binary string s and an integer k, 
return true if every binary code of length k is a substring of s. 
Otherwise, return false.

Example 1:
Input: s = "00110110", k = 2
Output: true
Explanation: The binary codes of length 2 are "00", "01", "10" and "11". They can be all found as substrings at indices 0, 1, 3 and 2 respectively.

Example 2:
Input: s = "0110", k = 1
Output: true
Explanation: The binary codes of length 1 are "0" and "1", it is clear that both exist as a substring. 

Example 3:
Input: s = "0110", k = 2
Output: false
Explanation: The binary code "00" is of length 2 and does not exist in the array.

Constraints:
1 <= s.length <= 5 * 105
s[i] is either '0' or '1'.
1 <= k <= 20
*/

// Here we create binary with length k
function hasAllCodes(s: string, k: number): boolean {
    const set = new Set()
    function toBinary(num: number, length: number) {
        let arr = new Array(length).fill(0)
        let i = length - 1
        while (num > 0) {
            arr[i--] = num % 2
            num = Math.floor(num / 2)
        }
        return arr.join("")
    }
    for (let i = 0; i < 1 << k; i++) {
        set.add(toBinary(i, k))
    }
    for (let i = 0; i <= s.length - k; i++) {
        if (set.has(s.slice(i, i + k))) {
            set.delete(s.slice(i, i + k))
            if (!set.size) return true
        }
    }
    return false
}

// The number of distinct sub-strings should be exactly 2^k.
function hasAllCodes2(s: string, k: number): boolean {
    const set = new Set()
    for (let i = 0; i <= s.length - k; i++) {
        set.add(s.slice(i, i + k))
    }
    return set.size == 1 << k
}

console.log(hasAllCodes("001101000111000", 3))
