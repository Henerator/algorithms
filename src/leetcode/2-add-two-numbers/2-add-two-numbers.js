const { ListNode } = require('./../../_helpers/linked-list');

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  function getValue(node) {
    return !node ? 0 : node.val;
  }

  function getNext(node) {
    return node && node.next;
  }

  let currentA = l1;
  let currentB = l2;
  let head = null;
  let prevNode = null;
  let rest = 0;

  while (currentA || currentB || rest) {
    const aValue = getValue(currentA);
    const bValue = getValue(currentB);
    const sum = aValue + bValue + rest;
    const digit = sum < 10 ? sum : sum - 10;
    rest = sum < 10 ? 0 : 1;

    const node = new ListNode(digit);

    if (head === null) head = node;
    if (prevNode) prevNode.next = node;
    prevNode = node;

    currentA = getNext(currentA);
    currentB = getNext(currentB);
  }

  return head;
};

exports.addTwoNumbers = addTwoNumbers;
