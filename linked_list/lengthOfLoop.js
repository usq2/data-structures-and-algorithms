// Given the head of a linked list.
//  The task is to find the length of the loop in the linked list.
// If the loop is not present return 0.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const detectLoop = (head) => {
  let slow = head;
  let fast = head;
  let diff = 0;
  if (!head.next || !head.next.next) {
    return diff;
  }
  slow = slow.next;
  fast = fast.next.next;
  diff++;
  while (fast) {
    if (slow === fast) {
      return diff;
    }
    slow = slow.next;
    if (fast?.next?.next) {
      fast = fast.next.next;
    } else {
      return 0;
    }
    diff++;
  }
  return 0;
};
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = new Node(7);
head.next.next.next.next.next.next.next = head.next.next;

console.log(detectLoop(head));
