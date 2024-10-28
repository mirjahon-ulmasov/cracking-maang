/*
You are given n rectangles represented by a 0-indexed 2D integer array rectangles, where rectangles[i] = [widthi, heighti] denotes the width and height of the ith rectangle.

Two rectangles i and j (i < j) are considered interchangeable if they have the same width-to-height ratio. More formally, two rectangles are interchangeable if widthi/heighti == widthj/heightj (using decimal division, not integer division).

Return the number of pairs of interchangeable rectangles in rectangles.

Example 1:
Input: rectangles = [[4,8],[3,6],[10,20],[15,30]]
Output: 6
Explanation: The following are the interchangeable pairs of rectangles by index (0-indexed):
- Rectangle 0 with rectangle 1: 4/8 == 3/6.
- Rectangle 0 with rectangle 2: 4/8 == 10/20.
- Rectangle 0 with rectangle 3: 4/8 == 15/30.
- Rectangle 1 with rectangle 2: 3/6 == 10/20.
- Rectangle 1 with rectangle 3: 3/6 == 15/30.
- Rectangle 2 with rectangle 3: 10/20 == 15/30.

Example 2:
Input: rectangles = [[4,5],[7,8]]
Output: 0
Explanation: There are no interchangeable pairs of rectangles.
*/

// Brute force solution
// Time: O(n^2) Space: O(1)
function interchangeableRectangles(rectangles: [number, number][]): number {
    let count = 0
    for (let i = 0; i < rectangles.length; i++) {
        for (let j = i + 1; j < rectangles.length; j++) {
            if (
                rectangles[i][0] / rectangles[i][1] ==
                rectangles[j][0] / rectangles[j][1]
            ) {
                count++
            }
        }
    }
    return count
}

// Time: O(n) Space: O(n)
function interchangeableRectangles2(rectangles: [number, number][]): number {
    let count = 0
    const ratioCounts = new Map()
    for (let i = 0; i < rectangles.length; i++) {
        const ratio = rectangles[i][0] / rectangles[i][1]
        ratioCounts.set(ratio, (ratioCounts.get(ratio) || 0) + 1)
    }
    ratioCounts.forEach(value => {
        for (let i = 1; i < value; i++) {
            count += i
        }
    })
    return count
}

console.log(
    interchangeableRectangles2([
        [4, 8],
        [3, 6],
        [10, 20],
        [15, 30],
    ])
)
