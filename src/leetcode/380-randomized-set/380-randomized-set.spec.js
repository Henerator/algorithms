const { RandomizedSet } = require('./380-randomized-set');

it('test 1', () => {
  const randomizedSet = new RandomizedSet();
  expect(randomizedSet.insert(1)).toEqual(true);  // Inserts 1 to the set. Returns true as 1 was inserted successfully.
  expect(randomizedSet.remove(2)).toEqual(false); // Returns false as 2 does not exist in the set.
  expect(randomizedSet.insert(2)).toEqual(true);  // Inserts 2 to the set, returns true. Set now contains [1,2].
  expect(randomizedSet.getRandom()).toBeTruthy(); // getRandom() should return either 1 or 2 randomly.
  expect(randomizedSet.remove(1)).toEqual(true);  // Removes 1 from the set, returns true. Set now contains [2].
  expect(randomizedSet.insert(2)).toEqual(false); // 2 was already in the set, so return false.
  expect(randomizedSet.getRandom()).toEqual(2);   // Since 2 is the only number in the set, getRandom() will always return 2.
});
