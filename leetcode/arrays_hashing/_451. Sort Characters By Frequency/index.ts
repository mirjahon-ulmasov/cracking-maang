/*
Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.

Return the sorted string. If there are multiple answers, return any of them.

Example 1:
Input: s = "tree"
Output: "eert"
Explanation: 'e' appears twice while 'r' and 't' both appear once.
So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.

Example 2:
Input: s = "cccaaa"
Output: "aaaccc"
Explanation: Both 'c' and 'a' appear three times, so both "cccaaa" and "aaaccc" are valid answers.
Note that "cacaca" is incorrect, as the same characters must be together.

Example 3:
Input: s = "Aabb"
Output: "bbAa"
Explanation: "bbaA" is also a valid answer, but "Aabb" is incorrect.
Note that 'A' and 'a' are treated as two different characters.
*/

// Using Bucket sort
// Time: O(n) Space: O(n)
function frequencySort(s: string): string {
    const alphabet = new Map<string, number>() // a -> 3, b -> 4, c -> 3, d -> 2
    const bucket = new Map<number, string[]>() // 3 -> [a,c], 2 -> [d], 4 -> [b]
    const result = []

    for (const char of s) {
        alphabet.set(char, (alphabet.get(char) || 0) + 1)
    }
    for (const [key, value] of alphabet) {
        const arr = bucket.get(value) || []
        arr.push(key)
        bucket.set(value, arr)
    }
    for (let i = s.length - 1; i > 0; i--) {
        const chars = bucket.get(i)
        if (!chars) continue
        for (const char of chars) {
            let count = 0
            while (count < i) {
                result.push(char)
                count++
            }
        }
    }
    return result.join("")
}

// Time: O(nlogn) Space: O(n)
function _frequencySort(s: string): string {
    const alphabet = new Map() // a -> 3, b -> 4, c -> 3, d -> 2
    const result = []

    for (const char of s) {
        alphabet.set(char, (alphabet.get(char) || 0) + 1)
    }
    const keys = Array.from(alphabet.keys()) // [a,b,c,d]
    keys.sort((a, b) => alphabet.get(b) - alphabet.get(a)) // Time: O(nlogn)
    for (const key of keys) {
        let count = alphabet.get(key)
        while (count > 0) {
            result.push(key)
            count--
        }
    }
    return result.join("")
}
