/*
Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

Example 1:
Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"

Example 2:
Input: s = "Mr Ding"
Output: "rM gniD"
*/

function reverseWords(s: string): string {
    function reverse(word: string): string {
        const arr = word.split('')
        let L = 0, R = arr.length - 1

        function swap(i: number, j: number) {
            const temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }
        while (L < R) {
            swap(L, R)
            L++
            R--
        }
        return arr.join('')
    }
    return s.split(' ').map(word => reverse(word)).join(' ')
};