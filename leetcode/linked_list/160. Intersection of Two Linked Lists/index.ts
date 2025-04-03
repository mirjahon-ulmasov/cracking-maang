// @ts-nocheck
function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    let curA = headA, curB = headB
    while (curA != curB) {
        curA = curA ? curA.next : headB
        curB = curB ? curB.next : headA
    }
    return curA
};

function _getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    let curA = headA, lengthA = 0
    while (curA) {
        lengthA++
        curA = curA.next
    }
    let curB = headB, lengthB = 0
    while (curB) {
        lengthB++
        curB = curB.next
    }
    curA = headA
    curB = headB
    let difference = Math.abs(lengthA - lengthB)
    if (lengthA > lengthB) {
        for (let i = 0; i < difference; i++) {
            curA = curA.next
        }
    } else {
        for (let i = 0; i < difference; i++) {
            curB = curB.next
        }
    }
    while (curA != curB) {
        curA = curA.next
        curB = curB.next
    }
    return curA
};