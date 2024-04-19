/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var mergeTwoLists = function (headA, headB) {
  const root = new ListNode();
  let tail = root;

  while (true) {
    if (headA === null) {
      tail.next = headB;
      break;
    }

    if (headB === null) {
      tail.next = headA;
      break;
    }

    if (headA.val <= headB.val) {
      tail.next = headA;
      headA = headA.next;
    } else {
      tail.next = headB;
      headB = headB.next;
    }

    tail = tail.next;
  }

  return root.next;
};
