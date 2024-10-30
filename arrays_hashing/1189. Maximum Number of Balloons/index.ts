/*
Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

You can use each character in text at most once. Return the maximum number of instances that can be formed.

Example 1:
Input: text = "nlaebolko"
Output: 1

Example 2:
Input: text = "loonbalxballpoon"
Output: 2

Example 3:
Input: text = "leetcode"
Output: 0
*/

// Time: O(n) Space: O(n)
function maxNumberOfBalloons(text: string): number {
    const map = new Map()
    const balloon = new Map()
    let count = Infinity

    for (let char of text) {
        map.set(char, (map.get(char) || 0) + 1)
    }
    for (let char of "balloon") {
        balloon.set(char, (balloon.get(char) || 0) + 1)
    }
    balloon.forEach((value, key) => {
        count = Math.min(count, Math.floor((map.get(key) || 0) / value))
    })
    return count
}

console.log(maxNumberOfBalloons("leetcode"))
console.log(maxNumberOfBalloons("nlaebolko"))
console.log(maxNumberOfBalloons("loonbalxballpoon"))
