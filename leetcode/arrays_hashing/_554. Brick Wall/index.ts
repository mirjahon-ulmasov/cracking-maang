/*
There is a rectangular brick wall in front of you with n rows of bricks. The ith row has some number of bricks each of the same height (i.e., one unit) but they can be of different widths. The total width of each row is the same.

Draw a vertical line from the top to the bottom and cross the least bricks. If your line goes through the edge of a brick, then the brick is not considered as crossed. You cannot draw a line just along one of the two vertical edges of the wall, in which case the line will obviously cross no bricks.

Given the 2D array wall that contains the information about the wall, return the minimum number of crossed bricks after drawing such a vertical line.

Example 1:
Input: wall = [[1,2,2,1],[3,1,2],[1,3,2],[2,4],[3,1,2],[1,3,1,1]]
Output: 2

Example 2:
Input: wall = [[1],[1],[1]]
Output: 3
*/

// We DON'T count each bricks, we DO count each gap between brick.
// If brick were [1000, 1000] there is 2000 bricks in total, but 1 gap, we don't cross all 2000
// The most gap means least crossing walls
function leastBricks(wall: number[][]): number {
    const gapsMap = new Map()
    let maxGap = 0
    for (let row = 0; row < wall.length; row++) {
        let position = 0
        for (let brick = 0; brick < wall[row].length - 1; brick++) {
            position += wall[row][brick]
            gapsMap.set(position, (gapsMap.get(position) || 0) + 1)
        }
    }
    for (let values of gapsMap.values()) {
        if (values > maxGap) maxGap = values
    }
    return wall.length - maxGap
}

console.log(
    leastBricks([
        [1, 2, 2, 1],
        [3, 1, 2],
        [1, 3, 2],
        [2, 4],
        [3, 1, 2],
        [1, 3, 1, 1],
    ])
)
console.log(leastBricks([[1], [1], [1]]))
