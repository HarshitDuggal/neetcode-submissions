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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    
    mergeKLists(lists) {
        if(lists.length === 0) return null;
      function merge(list1,list2){
        let mergedList = new ListNode();
        let current = mergedList;
        while(list1 !== null && list2 !== null){
            if(list1.val <= list2.val){
                current.next = list1;
                list1 = list1.next;
            }else{
                current.next = list2;
                list2 = list2.next;
            }
            current = current.next;
        }
        if(list1 !== null) current.next = list1;
        if(list2 !== null) current.next = list2;
        return mergedList.next;
      } 
      function mergeLists(list,left,right){
        if(left === right) return list[left];
            let mid = Math.floor((left + right)/2);
            let leftSide = mergeLists(list,left,mid);
            let rightSide = mergeLists(list,mid+1,right);
            return merge(leftSide,rightSide);
        }
       return mergeLists(lists,0,lists.length-1);
    }
   
}