const { findLongestChain } = require('./646-max-length');
const { findLongestChain: findLongestChainV2 } = require('./646-max-length-v2');

describe('646-max-length v1', () => {
  it('test 1', () => {
    const output = findLongestChain([
      [1, 2],
      [2, 3],
      [3, 4],
    ]);
    expect(output).toEqual(2);
  });

  it('test 2', () => {
    const output = findLongestChain([
      [1, 2],
      [7, 8],
      [4, 5],
    ]);
    expect(output).toEqual(3);
  });

  it('test 3', () => {
    const output = findLongestChain([[1, 2]]);
    expect(output).toEqual(1);
  });

  it('test 4', () => {
    const output = findLongestChain([
      [1, 100],
      [2, 3],
      [4, 5],
      [6, 7],
      [101, 102],
    ]);
    expect(output).toEqual(4);
  });
});

describe('646-max-length v2', () => {
  it('test 1', () => {
    const output = findLongestChainV2([
      [1, 2],
      [2, 3],
      [3, 4],
    ]);
    expect(output).toEqual(2);
  });

  it('test 2', () => {
    const output = findLongestChainV2([
      [1, 2],
      [7, 8],
      [4, 5],
    ]);
    expect(output).toEqual(3);
  });

  it('test 3', () => {
    const output = findLongestChainV2([[1, 2]]);
    expect(output).toEqual(1);
  });

  it('test 4', () => {
    const output = findLongestChainV2([
      [1, 100],
      [2, 3],
      [4, 5],
      [6, 7],
      [101, 102],
    ]);
    expect(output).toEqual(4);
  });
});
