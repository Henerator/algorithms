var Reverse = function (head, left, right) {
  function reverseList(head) {
    let prev = null;
    let current = head;
    while (current) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    return prev;
  }

  if (left === right) return head;

  let rangeHead = null;
  let rangeTail = null;
  let preRangeNode = null;
  let postRangeNode = null;

  let index = 1;
  let current = head;
  while (current && index <= right) {
    if (index < left) preRangeNode = current;
    if (index === left) rangeHead = current;

    if (index === right) {
      rangeTail = current;
      postRangeNode = current.next;
    }

    current = current.next;
    index++;
  }

  rangeTail.next = null;
  rangeTail = reverseList(rangeHead);

  if (preRangeNode) {
    preRangeNode.next = rangeTail;
  } else {
    head = rangeTail;
  }

  rangeHead.next = postRangeNode;
  return head;
};
