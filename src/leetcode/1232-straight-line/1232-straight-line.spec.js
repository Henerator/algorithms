const { checkStraightLine } = require('./1232-straight-line');

it('test 1', () => {
  const points = [[32, 6], [29, 2], [32, 6], [29, 2], [35, 10]];
  const output = checkStraightLine(points);
  expect(output).toEqual(true);
});

it('test 2', () => {
  const points = [[-22, -75], [-30, -70]];
  const output = checkStraightLine(points);
  expect(output).toEqual(true);
});

it('test 3', () => {
  const points = [[86, -93], [88, -91], [70, -81], [86, -93]];
  const output = checkStraightLine(points);
  expect(output).toEqual(false);
});
