//   Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function middleNode(head: ListNode | null): ListNode | null {
  if (!head) {
    return head;
  }
  if (!head.next) return head;
  if (head.next && !head.next.next) return head.next;
  let slow: ListNode = head;
  let fast: ListNode = head;
  while (fast.next) {
    slow = slow.next!;
    fast = fast.next.next ? fast.next.next : fast.next;
  }
  return slow;
}
