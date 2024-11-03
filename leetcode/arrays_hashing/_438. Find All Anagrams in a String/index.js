/*
Given two strings s and p, return an array of all the start indices of p's
anagrams in s. You may return the answer in any order.

Example 1:
Input: s = "cbaebabacd", p = "abc"
Output: [0,6]
Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".

Example 2:
Input: s = "abab", p = "ab"
Output: [0,1,2]
Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".
*/
function findAnagrams(s, p) {
    var pMap = new Map();
    var sMap = new Map();
    var result = [];
    for (var _i = 0, p_1 = p; _i < p_1.length; _i++) {
        var char = p_1[_i];
        pMap.set(char, (pMap.get(char) || 0) + 1);
    }
    for (var _a = 0, _b = s.slice(0, p.length); _a < _b.length; _a++) {
        var char = _b[_a];
        sMap.set(char, (sMap.get(char) || 0) + 1);
    }
    var _loop_1 = function (i, j) {
        var isFull = true;
        sMap.forEach(function (value, key) {
            if ((pMap.get(key) || 0) != value) {
                isFull = false;
                return;
            }
        });
        if (isFull) {
            result.push(i);
        }
        sMap.set(s[i], sMap.get(s[i]) - 1);
        sMap.set(s[j], (sMap.get(s[j]) || 0) + 1);
        console.log(sMap);
    };
    for (var i = 0, j = p.length; i < s.length - p.length; i++, j++) {
        _loop_1(i, j);
    }
    return result;
}
console.log(findAnagrams("cbaebabacd", "abc"));
console.log(findAnagrams("abab", "ab"));
