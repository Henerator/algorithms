/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  let current = head;
  let count = 1;

  while (current?.next) {
    current = current.next;
    count++;
  }

  if (count <= 1) return head;

  current.next = head;
  current = head;

  let steps = count - (k % count) - 1;
  while (steps > 0) {
    current = current.next;
    steps--;
  }

  head = current.next;
  current.next = null;

  return head;
};
