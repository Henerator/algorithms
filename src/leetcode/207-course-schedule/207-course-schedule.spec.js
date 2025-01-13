const { canFinish } = require('./207-course-schedule');
const { canFinish: canFinishV2 } = require('./207-course-schedule-2');

describe('canFinish v1', () => {
  it('test 1', () => {
    const output = canFinish(2, [[1, 0]]);
    expect(output).toEqual(true);
  });

  it('test 2', () => {
    const output = canFinish(2, [
      [1, 0],
      [0, 1],
    ]);
    expect(output).toEqual(false);
  });

  it('test 3', () => {
    const output = canFinish(5, []);
    expect(output).toEqual(true);
  });
});

describe('canFinish v2', () => {
  it('test 1', () => {
    const output = canFinishV2(2, [[1, 0]]);
    expect(output).toEqual(true);
  });

  it('test 2', () => {
    const output = canFinishV2(2, [
      [1, 0],
      [0, 1],
    ]);
    expect(output).toEqual(false);
  });

  it('test 3', () => {
    const output = canFinishV2(5, []);
    expect(output).toEqual(true);
  });
});
