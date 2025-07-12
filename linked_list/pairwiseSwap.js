// Given a singly linked list, the task is to swap linked list elements pairwise.
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const swap = (head) => {
    if (!head) return
    if (!head.next) return
    let first = head
    let prev = head
    let second = head.next
    while (second) {
        prev.next = first.next
        first.next = second.next
        second.next = first
        if (first === head) {
            head = second
        }
        prev = first;
        first = first.next
        if (!first) return head
        second = first.next
    }
    return head
}

  function printList(curr) {
    let output = "";
    while (curr !== null) {
      output += curr.val + " ";
      curr = curr.next;
    }
    console.log(output.trim());
  }

 
// 1 -> 2 -> 3 -> 4 -> 5 -> 6
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);

 head = swap(head);
 printList(head);
 console.log(head)