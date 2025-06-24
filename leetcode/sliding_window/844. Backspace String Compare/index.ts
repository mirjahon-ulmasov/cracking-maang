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
*/

function backspaceCompare(s: string, t: string): boolean {
    function getValidCharIndex(str: string, index: number): number {
        let backspaces = 0
        while (index >= 0) {
            if (str[index] == '#') {
                index--
                backspaces++
            } else if (backspaces > 0) {
                index--
                backspaces--
            } else {
                break
            }
        }
        return index
    }

    let sIdx = s.length, tIdx = t.length
    while (sIdx >= 0 && tIdx >= 0) {
        sIdx = getValidCharIndex(s, sIdx - 1)
        tIdx = getValidCharIndex(t, tIdx - 1)

        if (s[sIdx] != t[tIdx]) return false
        if (sIdx == -1 && tIdx == -1) return true
    }
    return true
};