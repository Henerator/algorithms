const { getIntersection, Segment } = require('./l-intersection');

it('test 1', () => {
  const A = [new Segment(1, 4), new Segment(5, 10), new Segment(15, 16)];
  const B = [new Segment(0, 2), new Segment(4, 5)];
  const output = getIntersection(A, B);
  expect(output.length).toEqual(3);

  expect(output[0].left).toEqual(1);
  expect(output[0].right).toEqual(2);

  expect(output[1].left).toEqual(4);
  expect(output[1].right).toEqual(4);

  expect(output[2].left).toEqual(5);
  expect(output[2].right).toEqual(5);
});

it('test 2', () => {
  const A = [new Segment(1, 4)];
  const B = [new Segment(1, 4)];
  const output = getIntersection(A, B);
  expect(output.length).toEqual(1);

  expect(output[0].left).toEqual(1);
  expect(output[0].right).toEqual(4);
});

it('empty first sequence', () => {
  const A = [];
  const B = [new Segment(1, 2)];
  const output = getIntersection(A, B);
  expect(output.length).toEqual(0);
});

it('no intersection', () => {
  const A = [new Segment(1, 4), new Segment(7, 10)];
  const B = [new Segment(5, 6), new Segment(11, 12)];
  const output = getIntersection(A, B);
  expect(output.length).toEqual(0);
});

it('intersection in one point', () => {
  const A = [new Segment(1, 2), new Segment(3, 4)];
  const B = [new Segment(2, 3), new Segment(4, 5)];
  const output = getIntersection(A, B);
  expect(output.length).toEqual(3);

  expect(output[0].left).toEqual(2);
  expect(output[0].right).toEqual(2);

  expect(output[1].left).toEqual(3);
  expect(output[1].right).toEqual(3);

  expect(output[2].left).toEqual(4);
  expect(output[2].right).toEqual(4);
});

it('overlay intersection', () => {
  const A = [new Segment(1, 4), new Segment(5, 8)];
  const B = [new Segment(2, 6), new Segment(7, 10)];
  const output = getIntersection(A, B);
  expect(output.length).toEqual(3);

  expect(output[0].left).toEqual(2);
  expect(output[0].right).toEqual(4);

  expect(output[1].left).toEqual(5);
  expect(output[1].right).toEqual(6);

  expect(output[2].left).toEqual(7);
  expect(output[2].right).toEqual(8);
});

it('full intesection', () => {
  const A = [new Segment(1, 2), new Segment(3, 4)];
  const B = [new Segment(1, 2), new Segment(3, 4)];
  const output = getIntersection(A, B);
  expect(output.length).toEqual(2);

  expect(output[0].left).toEqual(1);
  expect(output[0].right).toEqual(2);

  expect(output[1].left).toEqual(3);
  expect(output[1].right).toEqual(4);
});

it('one inside another', () => {
  const A = [new Segment(1, 5)];
  const B = [new Segment(2, 3)];
  const output = getIntersection(A, B);
  expect(output.length).toEqual(1);

  expect(output[0].left).toEqual(2);
  expect(output[0].right).toEqual(3);
});

it('multiple inside another', () => {
  const A = [new Segment(1, 2), new Segment(3, 4), new Segment(5, 6)];
  const B = [new Segment(1, 10)];
  const output = getIntersection(A, B);

  expect(output.length).toEqual(3);

  expect(output[0].left).toEqual(1);
  expect(output[0].right).toEqual(2);

  expect(output[1].left).toEqual(3);
  expect(output[1].right).toEqual(4);

  expect(output[2].left).toEqual(5);
  expect(output[2].right).toEqual(6);
});
