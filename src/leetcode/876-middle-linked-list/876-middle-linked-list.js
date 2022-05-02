function middleNode(head) {
  let listLength = 0;
  let node = head;

  while (node) {
    listLength++;
    node = node.next;
  }

  const middle = Math.floor(listLength / 2);

  node = head;
  for (let index = 0; index < middle; index++) {
    node = node.next;
  }

  return node.val;
}

exports.middleNode = middleNode;
