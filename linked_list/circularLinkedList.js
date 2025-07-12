/**
 * Given the head of a singly linked list, the task is to find if given linked list is circular or not.
 *  A linked list is called circular if its last node points back to its first node.
 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
const isListCircular = (head) => {
    let curr = head
    while (curr.next !== null) {
        if (curr.next === head) {
            return true
        }
        curr = curr.next
    }
    return false
}


// Create a hard-coded linked list:
// 1 -> 2 -> 3 -> 4 -> 5 -> 6
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(4);
head.next.next.next.next.next = head;
  
console.log (isListCircular(head))