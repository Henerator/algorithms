class DequeNode {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class CustomDeque {
  constructor(arr) {
    this.tail = new DequeNode(null);
    this.head = new DequeNode(null);

    this.tail.next = this.head;
    this.head.prev = this.tail;

    this.size = 0;

    arr.forEach((value) => this.push(value));
  }

  get headValue() {
    return this.head.prev.value;
  }

  get tailValue() {
    return this.tail.next.value;
  }

  push(value) {
    const node = new DequeNode(value);
    node.next = this.head;
    node.prev = this.head.prev;

    this.head.prev.next = node;
    this.head.prev = node;

    this.size++;
  }

  pop() {
    if (!this.size) return;

    const node = this.head.prev;
    this.removeNode(node);
    this.size--;

    return node.value;
  }

  shift() {
    if (!this.size) return;

    const node = this.tail.next;
    this.removeNode(node);
    this.size--;

    return node.value;
  }

  unshift(value) {
    const node = new DequeNode(value);
    node.next = this.tail.next;
    node.prev = this.tail;

    this.tail.next.prev = node;
    this.tail.next = node;

    this.size++;
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
 * @param {number[]} tasks
 * @param {number[]} workers
 * @param {number} pills
 * @param {number} strength
 * @return {number}
 */
var maxTaskAssign = function (tasks, workers, pills, pillStrength) {
  const tasksCount = tasks.length;
  const workersCount = workers.length;

  tasks.sort((a, b) => a - b);
  workers.sort((a, b) => a - b);

  function canAssign(count) {
    const currentWorkers = new CustomDeque([]);
    let pillsLeft = pills;
    let workerIndex = workersCount - 1;

    for (let taskIndex = count - 1; taskIndex >= 0; taskIndex--) {
      const taskStrength = tasks[taskIndex];
      while (workerIndex >= workersCount - count && workers[workerIndex] + pillStrength >= taskStrength) {
        currentWorkers.unshift(workers[workerIndex]);
        workerIndex--;
      }

      if (!currentWorkers.size) return false;

      if (currentWorkers.headValue >= taskStrength) {
        currentWorkers.pop();
      } else if (pillsLeft > 0 && currentWorkers.tailValue + pillStrength >= taskStrength) {
        currentWorkers.shift();
        pillsLeft--;
      } else {
        return false;
      }
    }

    return true;
  }

  let low = 1;
  let high = Math.min(tasksCount, workersCount);
  let answer = 0;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (canAssign(mid)) {
      answer = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return answer;
};

exports.maxTaskAssign = maxTaskAssign;
