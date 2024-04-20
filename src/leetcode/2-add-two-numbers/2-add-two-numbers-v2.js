const { ListNode } = require('./../../_helpers/linked-list');

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
var addTwoNumbers = function (headA, headB) {
  const root = new ListNode();
  let tail = root;
  let rest = 0;

  while (headA || headB || rest) {
    let value = rest;

    if (headA) {
      value += headA.val;
      headA = headA.next;
    }

    if (headB) {
      value += headB.val;
      headB = headB.next;
    }

    tail.next = new ListNode(value % 10);
    tail = tail.next;

    rest = Math.floor(value / 10);
  }

  return root.next;
};

exports.addTwoNumbers = addTwoNumbers;
