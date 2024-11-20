/*
Given a string array words, return the maximum value of length(word[i]) * length(word[j]) where the two words do not share common letters. If no such two words exist, return 0.

Example 1:
Input: words = ["abcw","baz","foo","bar","xtfn","abcdef"]
Output: 16
Explanation: The two words can be "abcw", "xtfn".

Example 2:
Input: words = ["a","ab","abc","d","cd","bcd","abcd"]
Output: 4
Explanation: The two words can be "ab", "cd".

Example 3:
Input: words = ["a","aa","aaa","aaaa"]
Output: 0
Explanation: No such pair of words.
*/

// Not mine
function maxProduct(words: string[]): number {
    const n = words.length
    const bitmasks = new Array(n).fill(0)
    let maxProduct = 0

    // Create bitmask for each word
    for (let i = 0; i < n; i++) {
        for (const char of words[i]) {
            bitmasks[i] |= 1 << (char.charCodeAt(0) - "a".charCodeAt(0))
        }
    }

    // Compare each pair of words
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            // No common letters
            if ((bitmasks[i] & bitmasks[j]) === 0) {
                const product = words[i].length * words[j].length
                maxProduct = Math.max(maxProduct, product)
            }
        }
    }

    return maxProduct
}

// Mine
function maxProduct(words: string[]): number {
    const map = new Map()
    let maxProd = 0
    words.forEach((word, index) => {
        const set = new Set()
        for (let char of word) {
            set.add(char)
        }
        map.set(index, set)
    })
    for (let i = 0; i < words.length; i++) {
        for (let j = i + 1; j < words.length; j++) {
            let notCommon = true
            for (let value of map.get(j)) {
                if (map.get(i).has(value)) {
                    notCommon = false
                    break
                }
            }
            if (notCommon) {
                maxProd = Math.max(maxProd, words[i].length * words[j].length)
            }
        }
    }
    return maxProd
}
