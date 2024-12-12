/*
You are given an array people where people[i] is the weight of the ith person, and an infinite number of boats where each boat can carry a maximum weight of limit. Each boat carries at most two people at the same time, provided the sum of the weight of those people is at most limit.

Return the minimum number of boats to carry every given person.

Example 1:
Input: people = [1,2], limit = 3
Output: 1
Explanation: 1 boat (1, 2)

Example 2:
Input: people = [3,2,2,1], limit = 3
Output: 3
Explanation: 3 boats (1, 2), (2) and (3)

Example 3:
Input: people = [3,5,3,4], limit = 5
Output: 4
Explanation: 4 boats (3), (3), (4), (5)
*/

/*
Example 1: 
[5, 1, 4, 2] limit: 6
[1, 2, 4, 5]
[1, 5] => +1
[2, 4] => +1

Example 2:
[3, 2, 2, 1] limit: 3
[1, 2, 2, 3]
[3]     +1
[1, 2]  +1
[2]     +1
*/
function numRescueBoats(people: number[], limit: number): number {
    people.sort((a, b) => a - b)
    let boats = 0, left = 0, right = people.length - 1
    while (left <= right) {
        if (people[left] + people[right] > limit) {
            right -= 1
        } else {
            left += 1
            right -= 1
        }
        boats += 1
    }
    return boats
}

console.log(numRescueBoats([1, 2], 3))
console.log(numRescueBoats([3, 2, 2, 1], 3))
console.log(numRescueBoats([3, 5, 3, 4], 5))
console.log(numRescueBoats([5, 1, 4, 2], 6))
