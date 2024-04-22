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
var reverseKGroup = function (head, k) {
  const root = new ListNode(0, head);

  let previous = root;
  let current = head;

  while (true) {
    let testGroupCurrent = current;
    let offset = 0;
    while (testGroupCurrent && offset < k - 1) {
      testGroupCurrent = testGroupCurrent.next;
      offset++;
    }

    if (!testGroupCurrent) break;

    const previousReversedList = previous;

    let next = null;
    for (let i = 0; i < k; i++) {
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }

    const reversedTail = previousReversedList.next;
    previousReversedList.next.next = current;
    previousReversedList.next = previous;
    previous = reversedTail;
  }

  return root.next;
};
