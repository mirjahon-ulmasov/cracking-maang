/*
You are given an array of strings words (0-indexed).

In one operation, pick two distinct indices i and j, where words[i] is a non-empty string, and move any character from words[i] to any position in words[j].

Return true if you can make every string in words equal using any number of operations, and false otherwise.

Example 1:
Input: words = ["abc","aabc","bc"]
Output: true
Explanation: Move the first 'a' in words[1] to the front of words[2],
to make words[1] = "abc" and words[2] = "abc".
All the strings are now equal to "abc", so return true.

Example 2:
Input: words = ["ab","a"]
Output: false
Explanation: It is impossible to make all the strings equal using the operation.

Hint 1: Characters are independent—only the frequency of characters matters.
Hint 2: It is possible to distribute characters if all characters can be divided equally among all strings.
*/
function makeEqual(words) {
    var isEqual = true;
    var word = words.join("");
    var alphabet = new Map();
    for (var _i = 0, word_1 = word; _i < word_1.length; _i++) {
        var char = word_1[_i];
        alphabet.set(char, (alphabet.get(char) || 0) + 1);
    }
    alphabet.forEach(function (value, key) {
        if (value % words.length !== 0) {
            isEqual = false;
        }
    });
    return isEqual;
}
console.log(makeEqual(["abc", "aabc", "bc"]));
console.log(makeEqual(["ab", "a"]));
console.log(makeEqual(["abba"]));
console.log(makeEqual(["caaaaa", "aaaaaaaaa", "a", "bbb", "bbbbbbbbb", "bbb", "cc", "cccccccccccc", "ccccccc", "ccccccc", "cc", "cccc", "c", "cccccccc", "c"]));
