/*
You are given a string s consisting only of the characters '0' and '1'. In one operation, you can change any '0' to '1' or vice versa.

The string is called alternating if no two adjacent characters are equal. For example, the string "010" is alternating, while the string "0100" is not.

Return the minimum number of operations needed to make s alternating.

Example 1:
Input: s = "0100"
Output: 1
Explanation: If you change the last character to '1', s will be "0101", which is alternating.

Example 2:
Input: s = "10"
Output: 0
Explanation: s is already alternating.

Example 3:
Input: s = "1111"
Output: 2
Explanation: You need two operations to reach "0101" or "1010".
*/
function minOperations(s) {
    var count0 = 0;
    var count1 = 0;
    var arr0 = s.split("");
    var arr1 = s.split("");
    arr0[0] = '0';
    arr1[0] = '1';
    for (var i = 0; i < arr0.length; i++) {
        if (arr0[i] == arr0[i + 1]) {
            arr0[i + 1] = arr0[i + 1] == "1" ? "0" : "1";
            count0++;
        }
        if (arr1[i] == arr1[i + 1]) {
            arr1[i + 1] = arr1[i + 1] == "1" ? "0" : "1";
            count1++;
        }
    }
    console.log(arr0);
    console.log(arr1);
    return count0 < count1 ? count0 : count1;
}
console.log(minOperations("1111"));
console.log(minOperations("10010100"));
