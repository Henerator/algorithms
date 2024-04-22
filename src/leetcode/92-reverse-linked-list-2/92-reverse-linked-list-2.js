/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  const root = new ListNode(0, head);

  let previous = root;
  let current = head;

  for (let i = 1; i < left; i++) {
    previous = current;
    current = current.next;
  }

  const previousReversedList = previous;

  previous = null;
  let next = null;
  for (let i = 0; i < right - left + 1; i++) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }

  previousReversedList.next.next = current;
  previousReversedList.next = previous;

  return root.next;
};
