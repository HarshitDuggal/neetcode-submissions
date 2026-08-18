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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        if(head.next === null && n===1) return null;
          let pointer = head;
          
          let count = 1;
          while(pointer && pointer.next !== null){
            pointer = pointer.next;
            count++;
          }
          console.log(count);
          let posToRemoveFrom = count - n;
          let current = head;
              if (posToRemoveFrom === 0) {
                return head.next;
              }
         
             while (posToRemoveFrom > 1) {
                current = current.next;
                posToRemoveFrom--;
          }
          current.next = current.next.next;
          return head;
    }
}




