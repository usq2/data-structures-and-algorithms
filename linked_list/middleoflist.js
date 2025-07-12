/**
 * Given a singly linked list,
 *  the task is to remove every kth node of the linked list.
 *  Assume that k is always less than or equal to the length of the Linked List.
 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const middleNode = (head) => {
 
  let slow = head,
    fast = head
  while (fast.next !== null) {
    slow = slow.next
    if (fast.next.next) {
        fast = fast.next.next
    } else {
        break;
    }
  }
  return slow;
};

function printList(curr) {
  let output = "";
  while (curr !== null) {
    output += curr.val + " ";
    curr = curr.next;
  }
  console.log(output.trim());
}

// Create a hard-coded linked list:
// 1 -> 2 -> 3 -> 4 -> 5 -> 6
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
// head.next.next.next.next.next = new Node(6);

let k = 4;
 console.log (middleNode(head))

// printList(head);
