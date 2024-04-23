/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  const root = new ListNode(Infinity, head);
  let previous = root;
  let current = head;
  let duplicatedValue = null;

  while (current && current.next) {
    if (current.val !== current.next.val) {
      previous = current;
      current = current.next;
      continue;
    }

    duplicatedValue = current.val;

    while (current && current.val === duplicatedValue) {
      current = current.next;
    }

    previous.next = current;
  }

  return root.next;
};
