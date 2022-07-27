/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    
    let finalList = new ListNode();
    let holder = finalList;
    
    while (list1 != null && list2 != null) {
        
        // if the list 1 value is larger or equal 
        if (list1.val <= list2.val) {
            //append the value to finalList
            holder.next = new ListNode(list1.val);
            //push list 1 along
            list1 = list1.next;
        } else {
               holder.next = new ListNode(list2.val);
               list2 = list2.next;
        }
        holder = holder.next;
        
    }
    
    if(list1) {
        holder.next = list1;
    }
    if(list2) {
        holder.next = list2;
    }
    return finalList.next;
    
};