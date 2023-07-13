class MinStack {
  get topValue() {
    return this.stack[this.stack.length - 1];
  }

  get topMin() {
    return this.mins[this.mins.length - 1] ?? Infinity;
  }

  constructor() {
    this.stack = [];
    this.mins = [];
  }

  /**
   * @param {number} value
   * @return {void}
   */
  push(value) {
    this.mins.push(Math.min(this.topMin, value));
    this.stack.push(value);
  }

  /**
   * @return {void}
   */
  pop() {
    this.stack.pop();
    this.mins.pop();
  }

  /**
   * @return {number}
   */
  top() {
    return this.topValue;
  }

  /**
   * @return {number}
   */
  getMin() {
    return this.topMin;
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

exports.MinStack = MinStack;
