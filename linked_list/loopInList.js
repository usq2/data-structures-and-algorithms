// Given a singly linked list,
// check if the linked list has a loop (cycle) or not.
// A loop means that the last node of the linked list is connected back to a node in the same list.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const detectLoop = (head) => {
  let slow = head;
  let fast = head;
  if (!head.next || !head.next.next) {
    return false;
  }
  slow = slow.next;
  fast = fast.next.next;
  while (fast) {
    if (slow === fast) {
      return true;
    }
    slow = slow.next;
    if (fast?.next?.next) {
      fast = fast.next.next;
    } else {
      return false;
    }
  }
  return false;
};
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = head.next.next;

console.log(detectLoop(head));
