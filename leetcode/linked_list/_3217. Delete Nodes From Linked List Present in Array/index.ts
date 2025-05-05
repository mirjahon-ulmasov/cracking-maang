/*
You are given an array of integers nums and the head of a linked list. 
Return the head of the modified linked list after removing all nodes from the linked list that have a value that exists in nums.

Input: nums = [1,2,3], head = [1,2,3,4,5]
Output: [4,5]
*/

function modifiedList(nums: number[], head: ListNode | null): ListNode | null {
    const set = new Set(nums)
    let dummy = new ListNode(0, head)
    let cur = dummy
    while (cur.next) {
        if (set.has(cur.next.val)) {
            cur.next = cur.next.next
        } else {
            cur = cur.next
        }
    }
    return dummy.next
};