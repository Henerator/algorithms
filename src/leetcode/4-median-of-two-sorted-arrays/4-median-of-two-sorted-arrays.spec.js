const { findMedianSortedArrays } = require('./4-median-of-two-sorted-arrays');

it('test 1', () => {
  const arrA = [1, 3];
  const arrB = [2];
  const output = findMedianSortedArrays(arrA, arrB);

  expect(output).toEqual(2);
});

it('test 2', () => {
  const arrA = [1, 2];
  const arrB = [3, 4];
  const output = findMedianSortedArrays(arrA, arrB);

  expect(output).toEqual(2.5);
});

it('one element arrays', () => {
  const arrA = [1];
  const arrB = [2];
  const output = findMedianSortedArrays(arrA, arrB);

  expect(output).toEqual(1.5);
});

it('even total elements', () => {
  const arrA = [1, 2, 3];
  const arrB = [4, 5, 6];
  const output = findMedianSortedArrays(arrA, arrB);

  expect(output).toEqual(3.5);
});

it('odd total elements', () => {
  const arrA = [1, 2, 3, 4];
  const arrB = [5, 6, 7];
  const output = findMedianSortedArrays(arrA, arrB);

  expect(output).toEqual(4);
});
