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
var sortList = function (head) {
  function split(head) {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
      fast = fast.next.next;

      if (fast) slow = slow.next;
    }

    const secondHead = slow.next;
    slow.next = null;
    return secondHead;
  }

  function merge(leftHead, rightHead) {
    if (!leftHead) return rightHead;
    if (!rightHead) return leftHead;

    if (leftHead.val < rightHead.val) {
      leftHead.next = merge(leftHead.next, rightHead);
      return leftHead;
    }

    rightHead.next = merge(rightHead.next, leftHead);
    return rightHead;
  }

  function mergeSort(head) {
    if (!head || !head.next) return head;

    const secondHead = split(head);

    const leftHead = mergeSort(head);
    const rightHead = mergeSort(secondHead);

    return merge(leftHead, rightHead);
  }

  return mergeSort(head);
};

exports.sortList = sortList;
