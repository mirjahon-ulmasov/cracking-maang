/*
Given a binary string s, return the minimum number of character swaps to make it alternating, or -1 if it is impossible.

The string is called alternating if no two adjacent characters are equal. For example, the strings "010" and "1010" are alternating, while the string "0100" is not.

Any two characters may be swapped, even if they are not adjacent.

Example 1:
Input: s = "111000"
Output: 1
Explanation: Swap positions 1 and 4: "111000" -> "101010"
The string is now alternating.

Example 2:
Input: s = "010"
Output: 0
Explanation: The string is already alternating, no swaps are needed.

Example 3:
Input: s = "1110"
Output: -1
*/

function _minSwaps(s: string): number {
    const N = s.length
    let ones = 0, zeros = 0
    for (let char of s) {
        if (char == "1") ones++
        else zeros++
    }

    // 0's and 1's differences can be maximum 1 
    if (Math.abs(ones - zeros) > 1) return -1

    let mismatchPattern1010 = 0, mismatchPattern0101 = 0
    for (let i = 0; i < N; i++) {
        if (i % 2 == 1) {
            if (s[i] == "1") mismatchPattern0101++
            else mismatchPattern1010++
        } else {
            if (s[i] == "1") mismatchPattern1010++
            else mismatchPattern0101++
        }
    }
    // with 1 swap, we fix 2 mismatches
    mismatchPattern1010 = Math.floor(mismatchPattern1010 / 2)
    mismatchPattern0101 = Math.floor(mismatchPattern0101 / 2)

    if (ones == zeros) {
        return Math.min(mismatchPattern1010, mismatchPattern0101)
    } else if (ones > zeros) {
        return mismatchPattern0101
    } else {
        return mismatchPattern1010
    }
}
