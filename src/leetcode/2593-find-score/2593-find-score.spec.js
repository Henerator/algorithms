const { findScore } = require('./2593-find-score');
const { findScore: findScoreV2 } = require('./2593-find-score-v2');
const { findScore: findScoreV3 } = require('./2593-find-score-v3');

describe('findScore', () => {
  it('test 1', () => {
    const output = findScore([2, 1, 3, 4, 5, 2]);
    expect(output).toEqual(7);
  });

  it('test 2', () => {
    const output = findScore([2, 3, 5, 1, 3, 2]);
    expect(output).toEqual(5);
  });

  it('test 3', () => {
    const output = findScore([0]);
    expect(output).toEqual(0);
  });

  it('test 4', () => {
    const output = findScore([1]);
    expect(output).toEqual(1);
  });

  it('test 5', () => {
    const output = findScore([2, 1, 3]);
    expect(output).toEqual(1);
  });

  it('test 6', () => {
    const output = findScore([1, 2, 3]);
    expect(output).toEqual(4);
  });
});

describe('findScoreV2', () => {
  it('test 1', () => {
    const output = findScoreV2([2, 1, 3, 4, 5, 2]);
    expect(output).toEqual(7);
  });

  it('test 2', () => {
    const output = findScoreV2([2, 3, 5, 1, 3, 2]);
    expect(output).toEqual(5);
  });

  it('test 3', () => {
    const output = findScoreV2([0]);
    expect(output).toEqual(0);
  });

  it('test 4', () => {
    const output = findScoreV2([1]);
    expect(output).toEqual(1);
  });

  it('test 5', () => {
    const output = findScoreV2([2, 1, 3]);
    expect(output).toEqual(1);
  });

  it('test 6', () => {
    const output = findScoreV2([1, 2, 3]);
    expect(output).toEqual(4);
  });

  it('test 7', () => {
    const output = findScoreV2([2, 5, 6, 6, 10]);
    expect(output).toEqual(18);
  });
});

fdescribe('findScoreV3', () => {
  it('test 1', () => {
    const output = findScoreV3([2, 1, 3, 4, 5, 2]);
    expect(output).toEqual(7);
  });

  it('test 2', () => {
    const output = findScoreV3([2, 3, 5, 1, 3, 2]);
    expect(output).toEqual(5);
  });

  it('test 3', () => {
    const output = findScoreV3([0]);
    expect(output).toEqual(0);
  });

  it('test 4', () => {
    const output = findScoreV3([1]);
    expect(output).toEqual(1);
  });

  it('test 5', () => {
    const output = findScoreV3([2, 1, 3]);
    expect(output).toEqual(1);
  });

  it('test 6', () => {
    const output = findScoreV3([1, 2, 3]);
    expect(output).toEqual(4);
  });

  it('test 7', () => {
    const output = findScoreV3([2, 5, 6, 6, 10]);
    expect(output).toEqual(18);
  });
});
