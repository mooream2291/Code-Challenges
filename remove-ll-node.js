'use strict';

var removeElements = function(head, val) {
    if(!head) {}
    let node = new ListNode(1)
    node.next = head
    let n = node
    
    while(node) {  
        if( node.next && node.next.val === val) {
            node.next = node.next.next
        }            
        if(!node.next || node.next.val !== val) {
           node = node.next
        }
    }
    
    return n.next
};