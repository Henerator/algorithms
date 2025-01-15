class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class Deque {
  constructor() {
    this.head = new Node(null);
    this.tail = new Node(null);

    this.head.next = this.tail;
    this.tail.prev = this.head;

    this.size = 0;
  }

  push(value) {
    const node = new Node(value);
    node.next = this.tail;
    node.prev = this.tail.prev;

    this.tail.prev.next = node;
    this.tail.prev = node;

    this.size++;
  }

  shift() {
    if (!this.size) return;

    const node = this.head.next;
    this.removeNode(node);
    this.size--;

    return node.value;
  }

  removeNode(node) {
    if (!node.prev || !node.next) return;
    node.prev.next = node.next;
    node.next.prev = node.prev;
    node.next = null;
    node.prev = null;
  }
}

/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function (startGene, endGene, bank) {
  const chars = ['A', 'C', 'G', 'T'];
  const stack = new Deque();
  stack.push([startGene, 0]);

  const bankSet = new Set(bank);
  const endGeneSet = new Set([endGene]);
  const generatedSet = new Set();

  while (stack.size) {
    const [gene, move] = stack.shift();

    if (endGeneSet.has(gene)) return move;

    for (let i = 0; i < startGene.length; i++) {
      for (const char of chars) {
        const prefix = gene.substring(0, i);
        const suffix = gene.substring(i + 1);
        const mutatedGene = `${prefix}${char}${suffix}`;

        if (!bankSet.has(mutatedGene) || generatedSet.has(mutatedGene)) continue;

        generatedSet.add(mutatedGene);
        stack.push([mutatedGene, move + 1]);
      }
    }
  }

  return -1;
};

exports.minMutation = minMutation;
