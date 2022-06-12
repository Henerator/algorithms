const { intervalIntersection } = require('./986-intersections');

it('test 1', () => {
  const A = [
    [1, 4],
    [5, 10],
    [15, 16],
  ];
  const B = [
    [0, 2],
    [4, 5],
  ];
  const output = intervalIntersection(A, B);
  expect(output).toEqual([
    [1, 2],
    [4, 4],
    [5, 5],
  ]);
});

it('test 2', () => {
  const A = [[1, 4]];
  const B = [[1, 4]];
  const output = intervalIntersection(A, B);
  expect(output).toEqual([[1, 4]]);
});

it('test 3', () => {
  const A = [
    [0, 2],
    [5, 10],
    [13, 23],
    [24, 25],
  ];
  const B = [
    [1, 5],
    [8, 12],
    [15, 24],
    [25, 26],
  ];
  const output = intervalIntersection(A, B);
  expect(output).toEqual([
    [1, 2],
    [5, 5],
    [8, 10],
    [15, 23],
    [24, 24],
    [25, 25],
  ]);
});

it('empty first sequence', () => {
  const A = [];
  const B = [[1, 2]];
  const output = intervalIntersection(A, B);
  expect(output).toEqual([]);
});

it('no intersection', () => {
  const A = [
    [1, 4],
    [7, 10],
  ];
  const B = [
    [5, 6],
    [11, 12],
  ];
  const output = intervalIntersection(A, B);
  expect(output).toEqual([]);
});

it('intersection in one point', () => {
  const A = [
    [1, 2],
    [3, 4],
  ];
  const B = [
    [2, 3],
    [4, 5],
  ];
  const output = intervalIntersection(A, B);
  expect(output).toEqual([
    [2, 2],
    [3, 3],
    [4, 4],
  ]);
});

it('overlay intersection', () => {
  const A = [
    [1, 4],
    [5, 8],
  ];
  const B = [
    [2, 6],
    [7, 10],
  ];
  const output = intervalIntersection(A, B);
  expect(output).toEqual([
    [2, 4],
    [5, 6],
    [7, 8],
  ]);
});

it('full intesection', () => {
  const A = [
    [1, 2],
    [3, 4],
  ];
  const B = [
    [1, 2],
    [3, 4],
  ];
  const output = intervalIntersection(A, B);
  expect(output).toEqual([
    [1, 2],
    [3, 4],
  ]);
});

it('one inside another', () => {
  const A = [[1, 5]];
  const B = [[2, 3]];
  const output = intervalIntersection(A, B);
  expect(output).toEqual([[2, 3]]);
});

it('multiple inside another', () => {
  const A = [
    [1, 2],
    [3, 4],
    [5, 6],
  ];
  const B = [[1, 10]];
  const output = intervalIntersection(A, B);
  expect(output).toEqual([
    [1, 2],
    [3, 4],
    [5, 6],
  ]);
});
