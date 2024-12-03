/*
Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

Example 1:
Input: s = "ab#c", t = "ad#c"
Output: true
Explanation: Both s and t become "ac".

Example 2:
Input: s = "ab##", t = "c#d#"
Output: true
Explanation: Both s and t become "".

Example 3:
Input: s = "a#c", t = "b"
Output: false
Explanation: s becomes "c" while t becomes "b".
 

Constraints:
1 <= s.length, t.length <= 200
s and t only contain lowercase letters and '#' characters.
 
Follow up: Can you solve it in O(n) time and O(1) space?
*/

function backspaceCompare(s: string, t: string): boolean {
    let str1 = "", str2 = "", count = 0
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] == "#") count++
        else if (count > 0) count--
        else str1 += s[i]
    }
    count = 0
    for (let i = t.length - 1; i >= 0; i--) {
        if (t[i] == "#") count++
        else if (count > 0) count--
        else str2 += t[i]
    }
    return str1 == str2
}
