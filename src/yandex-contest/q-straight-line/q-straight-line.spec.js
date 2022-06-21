const { Point, isOnOneLine } = require('./q-straight-line');

it('test 1', () => {
  const points = [new Point(32, 6), new Point(29, 2), new Point(32, 6), new Point(29, 2), new Point(35, 10)];
  const output = isOnOneLine(points);
  expect(output).toEqual(true);
});

it('test 2', () => {
  const points = [new Point(-22, -75), new Point(-30, -70)];
  const output = isOnOneLine(points);
  expect(output).toEqual(true);
});

it('test 3', () => {
  const points = [new Point(86, -93), new Point(88, -91), new Point(70, -81), new Point(86, -93)];
  const output = isOnOneLine(points);
  expect(output).toEqual(false);
});
