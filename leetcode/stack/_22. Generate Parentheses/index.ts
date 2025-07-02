/*
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

Example 1:
Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]

Example 2:
Input: n = 1
Output: ["()"]
*/

function generateParenthesis(n: number): string[] {
    const result: string[] = [], stack: string[] = []
    function backtrack(open: number, close: number) {
        // 1) increase open brackets if it is less than n
        // 2) increase close brackets if it is less than open brackets
        // 3) stop when close == open == n
        if (open == n && close == n) {
            result.push(stack.join(''))
            return;
        }

        if (open < n) {
            stack.push('(')
            backtrack(open + 1, close)
            stack.pop()
        }
        if (close < open) {
            stack.push(')')
            backtrack(open, close + 1)
            stack.pop()
        }
    }
    backtrack(0, 0)
    return result
};