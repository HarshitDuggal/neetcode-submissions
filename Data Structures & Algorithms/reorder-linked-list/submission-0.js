/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        let slow = head;
        let fast = head.next;
        while(fast && fast.next !== null){
            slow = slow.next;
            fast = fast.next.next;
        }
        let secondHalf = slow.next;
        slow.next = null;
        let prev = null;
        while(secondHalf !== null){
            let temp = secondHalf.next;
            secondHalf.next = prev;
            prev = secondHalf;
            secondHalf = temp

        }
        let first  = head;
        secondHalf = prev;
        while(secondHalf !== null){

            let temp1  = first.next;
            let temp2  = secondHalf.next;
            first.next = secondHalf;
            secondHalf.next = temp1
            first = temp1;
            secondHalf = temp2;
        }
    }
}
