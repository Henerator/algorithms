const { LRUCache } = require('./146-lru-cache');

it('test 1', () => {
  const cache = new LRUCache(2);
  cache.put(1, 1);
  cache.put(2, 2);
  expect(cache.get(1)).toEqual(1);
  cache.put(3, 3);
  expect(cache.get(2)).toEqual(-1);
  cache.put(4, 4);
  expect(cache.get(1)).toEqual(-1);
  expect(cache.get(3)).toEqual(3);
  expect(cache.get(4)).toEqual(4);
});

it('test 2', () => {
  const cache = new LRUCache(1);
  cache.put(1, 1);
  cache.put(2, 2);
  expect(cache.get(1)).toEqual(-1);
  expect(cache.get(2)).toEqual(2);
  cache.put(3, 3);
  expect(cache.get(2)).toEqual(-1);
  expect(cache.get(3)).toEqual(3);
});

it('test 3', () => {
  const cache = new LRUCache(2);
  cache.put(1, 0);
  cache.put(2, 2);
  expect(cache.get(1)).toEqual(0);
  cache.put(3, 3);
  expect(cache.get(2)).toEqual(-1);
  cache.put(4, 4);
  expect(cache.get(1)).toEqual(-1);
  expect(cache.get(3)).toEqual(3);
  expect(cache.get(4)).toEqual(4);
});
