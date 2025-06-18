
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

// Here we used bit manipulation which is constant O(1)
function maxProduct(words: string[]): number {
    const aIdx = 'a'.charCodeAt(0)
    const N = words.length
    const masks = new Array(N)
    let result = 0

    for (let i = 0; i < N; i++) {
        let mask = 0
        for (let j = 0; j < words[i].length; j++) {
            const value = words[i][j].charCodeAt(0) - aIdx
            mask |= 1 << value
        }
        masks[i] = mask
    }
    for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
            if ((masks[i] & masks[j]) == 0) {
                const product = words[i].length * words[j].length
                result = Math.max(result, product)
            }
        }
    }
    return result
};

// Here we used array of sets
function _maxProduct(words: string[]): number {
    const N = words.length
    const wordsSet = Array.from({ length: N }, () => new Set<string>())
    let result = 0
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < words[i].length; j++) {
            wordsSet[i].add(words[i][j])
        }
    }
    for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
            let isSame = false
            outer: for (let char of wordsSet[i]) {
                for (let char2 of wordsSet[j]) {
                    if (char == char2) {
                        isSame = true
                        break outer
                    }
                }
            }
            if (!isSame) {
                const product = words[i].length * words[j].length
                result = Math.max(result, product)
            }
        }
    }
    return result
};