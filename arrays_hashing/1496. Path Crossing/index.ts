/*
Given a string path, where path[i] = 'N', 'S', 'E' or 'W', each representing moving one unit north, south, east, or west, respectively. You start at the origin (0, 0) on a 2D plane and walk on the path specified by path.

Return true if the path crosses itself at any point, that is, if at any time you are on a location you have previously visited. Return false otherwise.

Example 1:
Input: path = "NES"
Output: false 
Explanation: Notice that the path doesn't cross any point more than once.

Example 2:
Input: path = "NESWW"
Output: true
Explanation: Notice that the path visits the origin twice.
*/

function isPathCrossing(path: string): boolean {
    let x = 0, y = 0
    const set = new Set()
    set.add(`${x},${y}`)
    for(let unit of path) {
        if(unit == 'N') y++
        else if(unit == 'S') y--
        else if(unit == 'E') x++
        else x--

        if(set.has(`${x},${y}`)) {
            return true
        }
        set.add(`${x},${y}`)
        console.log(set);
    }
    console.log(set);
    
    return false
};

// function isPathCrossing2(path: string): boolean {
//     const directions = {
//         'N': [0, 1],
//         'S': [0, -1],
//         'E': [1, 0],
//         'W': [-1, 0],
//     }
//     let x = 0, y = 0
//     const set = new Set()
//     set.add('0,0')

//     for (let p of path) {
//         x += directions[p][0]
//         y += directions[p][1]

//         if (set.has(`${x},${y}`)) return true
//         set.add(`${x},${y}`)
//     }
//     return false
// };


console.log(isPathCrossing("NNSWWEWSSESSWENNW"));
console.log(isPathCrossing("NESWW"));

