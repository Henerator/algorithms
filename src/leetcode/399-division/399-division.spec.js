const { calcEquation } = require('./399-division');

it('test 1', () => {
  const equations = [
    ['a', 'b'],
    ['b', 'c'],
  ];
  const values = [2.0, 3.0];
  const queries = [
    ['a', 'c'],
    ['b', 'a'],
    ['a', 'e'],
    ['a', 'a'],
    ['x', 'x'],
  ];
  const output = calcEquation(equations, values, queries);
  expect(output).toEqual([6.0, 0.5, -1.0, 1.0, -1.0]);
});

it('test 2', () => {
  const equations = [
    ['a', 'b'],
    ['b', 'c'],
    ['bc', 'cd'],
  ];
  const values = [1.5, 2.5, 5.0];
  const queries = [
    ['a', 'c'],
    ['c', 'b'],
    ['bc', 'cd'],
    ['cd', 'bc'],
  ];
  const output = calcEquation(equations, values, queries);
  expect(output).toEqual([3.75, 0.4, 5.0, 0.2]);
});

it('test 3', () => {
  const equations = [['a', 'b']];
  const values = [0.5];
  const queries = [
    ['a', 'b'],
    ['b', 'a'],
    ['a', 'c'],
    ['x', 'y'],
  ];
  const output = calcEquation(equations, values, queries);
  expect(output).toEqual([0.5, 2.0, -1.0, -1.0]);
});
