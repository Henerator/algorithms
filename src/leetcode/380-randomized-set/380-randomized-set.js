var RandomizedSet = function () {
  this.values = [];
  this.valueIndexMap = new Map();
};

/**
 * @param {number} value
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (value) {
  if (this.valueIndexMap.has(value)) return false;

  const index = this.values.length;
  this.values.push(value);
  this.valueIndexMap.set(value, index);
  return true;
};

/**
 * @param {number} value
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (value) {
  if (!this.valueIndexMap.has(value)) return false;

  const index = this.valueIndexMap.get(value);
  const lastValue = this.values.at(-1);
  this.values[index] = lastValue;
  this.valueIndexMap.set(lastValue, index);
  this.valueIndexMap.delete(value);

  this.values.pop();

  return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  const index = Math.floor(Math.random() * this.values.length);
  return this.values[index];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(value)
 * var param_2 = obj.remove(value)
 * var param_3 = obj.getRandom()
 */

exports.RandomizedSet = RandomizedSet;
