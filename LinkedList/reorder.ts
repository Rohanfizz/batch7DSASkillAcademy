/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

/**
 Do not return anything, modify head in-place instead.
 */

 function getMid(head){
    if(head == null || head.next == null) return head;
    let slow = head;
    let fast = head;
    while(fast.next!=null && fast.next.next!=null){
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

function reverse(head){
    if(head == null || head.next == null) return head;
    let prev = null;
    let curr = head;
    let next = curr.next;

    while(curr!=null){
        curr.next = prev;

        prev = curr;
        curr = next;
        if(next != null) next = next.next;
    }

    return prev;
}

function reorderList(head: ListNode | null): void {
    let mid = getMid(head);
    let head2 = mid.next;
    mid.next = null;
    head2 = reverse(head2);

    let dummy = new ListNode(-1);
    let temp = dummy;
    let t1 = head;
    let t2 = head2;

    while(temp!=null){
        temp.next = t1;
        temp = temp.next;
        if(t1 != null) t1 = t1.next;
        if(temp == null) break;
        temp.next = t2;
        temp = temp.next;
        if(t2!=null) t2 = t2.next;
    }
    head = dummy.next;
};













