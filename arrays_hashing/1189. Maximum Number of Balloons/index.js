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
function maxNumberOfBalloons(text) {
    var map = new Map();
    var balloon = new Map();
    var count = Infinity;
    for (var _i = 0, text_1 = text; _i < text_1.length; _i++) {
        var char = text_1[_i];
        map.set(char, (map.get(char) || 0) + 1);
    }
    for (var _a = 0, _b = "balloon"; _a < _b.length; _a++) {
        var char = _b[_a];
        balloon.set(char, (balloon.get(char) || 0) + 1);
    }
    balloon.forEach(function (value, key) {
        count = Math.min(count, (map.get(key) || 0) / value);
    });
    return count;
}
console.log(maxNumberOfBalloons("nlaebolko"));
console.log(maxNumberOfBalloons("loonbalxballpoon"));
console.log(maxNumberOfBalloons("leetcode"));
