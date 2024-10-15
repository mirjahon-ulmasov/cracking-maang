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
function isPathCrossing(path) {
    var x = 0, y = 0;
    var set = new Set();
    set.add("".concat(x, ",").concat(y));
    for (var _i = 0, path_1 = path; _i < path_1.length; _i++) {
        var unit = path_1[_i];
        if (unit == 'N')
            y++;
        else if (unit == 'S')
            y--;
        else if (unit == 'E')
            x++;
        else
            x--;
        if (set.has("".concat(x, ",").concat(y))) {
            return true;
        }
        set.add("".concat(x, ",").concat(y));
        console.log(set);
    }
    console.log(set);
    return false;
}
;
console.log(isPathCrossing("NNSWWEWSSESSWENNW"));
console.log(isPathCrossing("NESWW"));
