// Given a singly linked list and a key, the task is to count the number of occurrences of the given key in the linked list.


class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  const countOccurences = (head,k) => {
   if (!head) return 0
   let count = 0;
    while (head.next !== null) {
     if (head.val === k) count++
     head = head.next
    }
    return count;
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
  head.next = new Node(1);
  head.next.next = new Node(1);
  head.next.next.next = new Node(1);
  head.next.next.next.next = new Node(1);
  head.next.next.next.next.next = new Node(1);
  
  let k = 1;
   console.log(countOccurences(head,k));
  
  // printList(head);
  