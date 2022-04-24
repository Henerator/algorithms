class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function generateLinkedList(arr) {
  const nodes = [];
  arr.forEach((value, index) => {
    const node = new Node(value);
    if (nodes[index - 1]) {
      nodes[index - 1].next = node;
    }

    nodes.push(node);
  });

  return nodes[0];
}

function isPalindrome(head) {
  const arr = [];

  let currentNode = head;
  while (currentNode) {
    arr.push(currentNode.value);
    currentNode = currentNode.next;
  }

  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    if (arr[left] !== arr[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

function isPalindromeV2(head) {
  let left = head;

  function dfs(right) {
    if (!right) return true;

    const isEqual = dfs(right.next);
    if (!isEqual) return false;

    if (left.value !== right.value) return false;

    left = left.next;

    return true;
  }

  return dfs(head);
}

exports.generateLinkedList = generateLinkedList;
exports.isPalindrome = isPalindrome;
exports.isPalindromeV2 = isPalindromeV2;
