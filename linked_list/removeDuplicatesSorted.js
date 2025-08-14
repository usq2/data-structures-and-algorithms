// Given a linked list sorted in non-decreasing order.
// Return the list by deleting the duplicate nodes from the list.
// The returned list should also be in non-decreasing order.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const removeDuplicates = (head) => {
  let curr = head;
  let dup = head;

  while (curr && curr.next) {
    if (dup.next && dup.next.val === dup.val) {
      dup = dup.next;
    } else {
      curr.next = dup.next;
      curr = curr.next;
      dup = dup.next;
    }
  }
};
function printList(curr) {
  let output = "";
  while (curr !== null) {
    output += curr.val + " ";
    curr = curr.next;
  }
  console.log(output.trim());
}
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(7);
head.next.next.next.next.next.next = new Node(7);
removeDuplicates(head);
printList(head);
