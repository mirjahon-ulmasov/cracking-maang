/*
You are given a string s consisting only of characters 'a' and 'b'​​​​.

You can delete any number of characters in s to make s balanced. s is balanced if there is no pair of indices (i,j) such that i < j and s[i] = 'b' and s[j]= 'a'.

Return the minimum number of deletions needed to make s balanced.

Example 1:
Input: s = "aababbab"
Output: 2
Explanation: You can either:
Delete the characters at 0-indexed positions 2 and 6 ("aababbab" -> "aaabbb"), or
Delete the characters at 0-indexed positions 3 and 6 ("aababbab" -> "aabbbb").

Example 2:
Input: s = "bbaaaaabb"
Output: 2
Explanation: The only solution is to delete the first two characters.
*/

// mine
function minimumDeletions(s: string): number {
    let total_a = 0, total_b = 0
    let min = s.length
    for (let char of s) {
        if (char == 'a') total_a++
    }
    for (let i = 0; i < s.length; i++) {
        min = Math.min(min, total_b + total_a)
        if (s[i] == 'a') total_a--
        else total_b++
    }
    return Math.min(min, total_b + total_a)
};

function _minimumDeletions(s: string): number {
    let bCount = 0
    let deletions = 0;
    for (let char of s) {
        if (char === "b") {
            bCount++;
        } else {
            deletions = Math.min(deletions + 1, bCount);
        }
    }
    return deletions
};