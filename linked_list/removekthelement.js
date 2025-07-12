/**
 * Given a singly linked list,
 *  the task is to remove every kth node of the linked list.
 *  Assume that k is always less than or equal to the length of the Linked List.
 */

class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

const deleteK = (head, k) => {
    if (!head || k <= 0) {
        return;
    }
    let prev = head,
      curr = head,
      count = 1;
    while (curr !== null) {
        if (count % k===0) {
            prev.next = curr.next
            curr=curr.next
            count++
            continue;
        }
        prev= curr;
        curr = curr.next;
        count++
    }
    return head;
}

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
head.next.next.next.next.next = new Node(6);

let k = 4;
head = deleteK(head, k);

printList(head);