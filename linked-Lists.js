'use strict';

//Traverse a singly linked list//

//1. check if there is a head, if there is not, no need for traversak because it is empty//
//2. check if there is more than one value, if there is not, there is no need for traversal//
//3. declaire a variable equal to an empty array (this will store the head value so we can look at it once we have moved to the next node)
//4. set our headt to be the linked list (when we do this it will be referencing the first node since the list moves in only one direction)
//5. write a while loop that starts by checking if head is null (while(head !===null))
//6. push the head value into the array (arr.push(head.value))
//7. check the next value by setting our pointer to head.next (head - head.next)
//.8. this will continue until the pointer points to null, at which point this will break out of the while loop
const arr = [];
let head = linkedList;

while (head !== null) {
    arr.push(head.value);
    head = head.next;
}
const arr = [];
let head = linkedList;

while (head !== null) {
    arr.push(head.value);
    head = head.next;
}
//reverse a singly linked lsit
//Iterively: time: O (n), space: O (1)
//touching all the nodes, doing it in place
//we only have constant variables (pointers)

//pointers//
this.prev = null;// maybe?
let current = this.head; // maybe?
this.next = null;// maybe?

while(current! = null)
//will have next pointer, a current pointer, and a previous



//Traverse a doubly linked list//

//Unlike the singly linked list, a doubly linked list has two pointers, one to the previous node and one to next node. 
//A doubly linked list has three references: a head, a length, and the tail
//The two pointers will be represented by next and previous

//prev set to null
//data value assigned and the next pointer is made to point to the next node in sequence
//next pointer set to null
//traversal almost the same as singly
//all nodes will be visited until the next node == null
//1. Create a node class that has a value, nect, and previous (in an interview probably assume we have access to these already)
//2. Set a variable to this.head
//3. write a while loop that takes in the head variable
//4. 
//Traverse a circularly linked list//

class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail =null;
        this.length = 0;
    }

    push() {
        let node = new Node(val)
        if(!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            let temp = this.tail;
            //tails new next needs to be the node that we pssed in
            this.tail = node;
            node.prev = temp;
            temp.next = node;
        }
        this.length++;
        return this;
    }
}

let list = new DoublyLinkedList;
list.push(1);
list.push(2);
list.push(3);


const reverseList = head => {
    let prev = null;
    let next = null;
    let current = head;
    while(current !== null) {
        current.next = prev
        prev = current
        current = next
    }
    return prev
}

let prev = null;
let next = null;
let current = head;
while(current !== null){
    current.next = prev;
    prev = current;
    current = next
}
let prev = null;
let next = null;
let current = head;
while(current!==null){
    current.next = prev;
    prev = current;
    current = next;
}
return prev;