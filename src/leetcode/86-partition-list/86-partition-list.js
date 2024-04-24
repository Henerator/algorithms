/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  const root = new ListNode(0, head);

  let previous = root;
  let current = head;

  while (current && current.val < x) {
    previous = current;
    current = current.next;
  }

  let insertPrevious = previous;
  let insertNext = current;

  while (current) {
    if (current.val < x) {
      previous.next = current.next;
      insertPrevious.next = current;
      current.next = insertNext;
      insertPrevious = current;
      current = previous.next;
      continue;
    }

    previous = current;
    current = current.next;
  }

  return root.next;
};
