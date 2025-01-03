/*
You are given a string num representing a large integer. An integer is good if it meets the following conditions:

It is a substring of num with length 3.
It consists of only one unique digit.
Return the maximum good integer as a string or an empty string "" if no such integer exists.

Note:

A substring is a contiguous sequence of characters within a string.
There may be leading zeroes in num or a good integer.
 

Example 1:
Input: num = "6777133339"
Output: "777"
Explanation: There are two distinct good integers: "777" and "333".
"777" is the largest, so we return "777"

Example 2:
Input: num = "2300019"
Output: "000"
Explanation: "000" is the only good integer.

Example 3:
Input: num = "42352338"
Output: ""
Explanation: No substring of length 3 consists of only one unique digit. Therefore, there are no good integers.
*/

function largestGoodInteger(num: string): string {
    let result = ""
    for (let i = 0; i < num.length; i++) {
        if (
            num.charAt(i) == num.charAt(i + 1) &&
            num.charAt(i + 1) == num.charAt(i + 2)
        ) {
            if (!result || Number(result.charAt(0)) < Number(num.charAt(i))) {
                result = num.substring(i, i + 3)
            }
            i += 2
        }
    }
    return result
}
