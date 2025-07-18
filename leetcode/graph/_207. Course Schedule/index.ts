/*
There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return true if you can finish all courses. Otherwise, return false.

Example 1:
Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0. So it is possible.

Example 2:
Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.
*/

function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const preMap = new Map<number, number[]>()
    for (let i = 0; i < numCourses; i++) {
        preMap.set(i, [])
    }
    for (let [a, b] of prerequisites) {
        preMap.get(a)!.push(b)
    }

    const state = new Map<number, boolean>()
    function dfs(course: number): boolean {
        if (state.has(course)) return state.get(course)!

        state.set(course, false)
        for (let pre of preMap.get(course)!) {
            if (!dfs(pre)) return false
        }
        state.set(course, true)
        return true
    }

    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)) return false
    }
    return true
};