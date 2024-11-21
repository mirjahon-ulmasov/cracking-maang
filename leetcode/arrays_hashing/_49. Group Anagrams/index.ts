/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Explanation:
There is no string in strs that can be rearranged to form "bat".
The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.

Example 2:
Input: strs = [""]
Output: [[""]]

Example 3:
Input: strs = ["a"]
Output: [["a"]]
*/

function groupAnagrams(strs: string[]): string[][] {
    const map: Map<string, string[]> = new Map()
    strs.forEach(str => {
        const sorted = str.split("").sort().join("")
        const arr = map.get(sorted) || []
        arr.push(str)
        map.set(sorted, arr)
    })
    return Array.from(map.values())
}

function _groupAnagrams(strs: string[]): string[][] {
    const map = new Map<string, string[]>()
    const result: string[][] = []
    for (let i = 0; i < strs.length; i++) {
        const count = new Array(26).fill(0)
        for (let j = 0; j < strs[i].length; j++) {
            const shifted = strs[i].charCodeAt(j) - "a".charCodeAt(0)
            count[shifted]++
        }
        map.set(count.toString(), [
            ...(map.get(count.toString()) ?? []),
            strs[i],
        ])
    }
    map.forEach(value => result.push(value))
    return result
}
