/*
Given a string s, return the number of unique palindromes of length three that are a subsequence of s.

Note that even if there are multiple ways to obtain the same subsequence, it is still only counted once.

A palindrome is a string that reads the same forwards and backwards.

A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

For example, "ace" is a subsequence of "abcde".

Example 1:
Input: s = "aabca"
Output: 3
Explanation: The 3 palindromic subsequences of length 3 are:
- "aba" (subsequence of "aabca")
- "aaa" (subsequence of "aabca")
- "aca" (subsequence of "aabca")

Example 2:
Input: s = "adc"
Output: 0
Explanation: There are no palindromic subsequences of length 3 in "adc".

Example 3:
Input: s = "bbcbaba"
Output: 4
Explanation: The 4 palindromic subsequences of length 3 are:
- "bbb" (subsequence of "bbcbaba")
- "bcb" (subsequence of "bbcbaba")
- "bab" (subsequence of "bbcbaba")
- "aba" (subsequence of "bbcbaba")
 
Constraints:
3 <= s.length <= 10^5
s consists of only lowercase English letters.
*/
// Not fully correct, when c appears before 2 a, it counts as aca
function countPalindromicSubsequence(s) {
    var chars = new Map(); // 28 alphabet
    var palindromes = new Set();
    var _loop_1 = function (char) {
        if (chars.has(char)) {
            chars.forEach(function (value, key) {
                if ((key == char && value > 1) || key != char) {
                    palindromes.add("".concat(char).concat(key).concat(char));
                }
            });
        }
        chars.set(char, (chars.get(char) || 0) + 1);
    };
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var char = s_1[_i];
        _loop_1(char);
    }
    console.log(palindromes);
    return palindromes.size;
}
function countPalindromicSubsequence2(s) {
    var right = new Map(); // 28 alphabet
    var left = new Set();
    var palindromes = new Set();
    for (var _i = 0, s_2 = s; _i < s_2.length; _i++) {
        var char = s_2[_i];
        right.set(char, (right.get(char) || 0) + 1);
    }
    var _loop_2 = function (char) {
        right.set(char, right.get(char) - 1);
        left.forEach(function (value) {
            if ((right.get(value) || 0) > 0) {
                palindromes.add(value + char + value);
            }
        });
        left.add(char);
    };
    for (var _a = 0, s_3 = s; _a < s_3.length; _a++) {
        var char = s_3[_a];
        _loop_2(char);
    }
    console.log(palindromes);
    return palindromes.size;
}
console.log(countPalindromicSubsequence2("aabca")); // aba aaa aca
console.log(countPalindromicSubsequence2("adc"));
console.log(countPalindromicSubsequence2("bbcbaba")); // bbb bcb bab aba
