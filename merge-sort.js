//Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

//declare a function that takes in two sorted linked lists
function mergeLists(list1, list2) {
//check that lists are not empty
//if list 1 is null, we will only need to return list 2, because a merge technically won't happen
if (list1 === null) {
  return list2;
}
//if we made it this far, that means list 1 was not null, however if list 2 is empty, again a merge won't actually happen so we will just return the first sorted list.
if (list2 === null) {
  return list1;
}
//write a conditional to see if the values in list1 are less than list 2

if (list1.val < list2.val) {
  list1.next = mergeLists(list1.next, list2);
  return list1;
}
list2.next = mergeLists(list2.next, list1);
return list2;
}
