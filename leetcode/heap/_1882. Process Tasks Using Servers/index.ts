/*
Example 1:

Input: servers = [3,3,2], tasks = [1,2,3,2,1,2]
Output: [2,2,0,2,1,2]
Explanation: Events in chronological order go as follows:
- At second 0, task 0 is added and processed using server 2 until second 1.
- At second 1, server 2 becomes free. Task 1 is added and processed using server 2 until second 3.
- At second 2, task 2 is added and processed using server 0 until second 5.
- At second 3, server 2 becomes free. Task 3 is added and processed using server 2 until second 5.
- At second 4, task 4 is added and processed using server 1 until second 5.
- At second 5, all servers become free. Task 5 is added and processed using server 2 until second 7.
Example 2:

Input: servers = [5,1,4,3,2], tasks = [2,1,2,4,5,2,1]
Output: [1,4,1,4,1,3,2]
Explanation: Events in chronological order go as follows: 
- At second 0, task 0 is added and processed using server 1 until second 2.
- At second 1, task 1 is added and processed using server 4 until second 2.
- At second 2, servers 1 and 4 become free. Task 2 is added and processed using server 1 until second 4. 
- At second 3, task 3 is added and processed using server 4 until second 7.
- At second 4, server 1 becomes free. Task 4 is added and processed using server 1 until second 9. 
- At second 5, task 5 is added and processed using server 3 until second 7.
- At second 6, task 6 is added and processed using server 2 until second 7.
*/

import { PriorityQueue } from "@datastructures-js/priority-queue"


function assignTasks(servers: number[], tasks: number[]): number[] {
    const availables = new PriorityQueue<{ server: number, index: number }>((a, b) => {
        return a.server == b.server ? a.index - b.index : a.server - b.server
    })
    const unavailables = new PriorityQueue<{ available_at: number, server: number, index: number }>((a, b) => {
        return a.available_at == b.available_at
            ? a.server == b.server
                ? a.index - b.index
                : a.server - b.server
            : a.available_at - b.available_at
    })
    for (let i = 0; i < servers.length; i++) {
        availables.enqueue({ server: servers[i], index: i })
    }
    const result = new Array(tasks.length)
    let time = 0

    for (let i = 0; i < tasks.length; i++) {
        time = Math.max(time, i)
        if (availables.isEmpty()) {
            const { available_at } = unavailables.front()!
            time = available_at
        }
        while (!unavailables.isEmpty() && unavailables.front()!.available_at <= time) {
            const { server, index } = unavailables.dequeue()!
            availables.enqueue({ server, index })
        }
        const { server, index } = availables.dequeue()!
        result[i] = index
        unavailables.enqueue({ available_at: time + tasks[i], server, index })
    }

    return result
};