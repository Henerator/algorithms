/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let arrA = nums1;
  let arrB = nums2;

  if (arrB.length < arrA.length) {
    [arrA, arrB] = [arrB, arrA];
  }

  const total = arrA.length + arrB.length;
  const half = Math.floor(total / 2);
  let low = 0;
  let high = arrA.length - 1;

  while (true) {
    let cutA = Math.floor((low + high) / 2);
    let cutB = half - cutA - 2;

    const aLeft = cutA >= 0 ? arrA[cutA] : -Infinity;
    const aRight = cutA + 1 < arrA.length ? arrA[cutA + 1] : Infinity;
    const bLeft = cutB >= 0 ? arrB[cutB] : -Infinity;
    const bRight = cutB + 1 < arrB.length ? arrB[cutB + 1] : Infinity;

    if (aLeft <= bRight && bLeft <= aRight) {
      if (total % 2 !== 0) {
        return Math.min(aRight, bRight);
      }

      return (Math.max(aLeft, bLeft) + Math.min(aRight, bRight)) / 2;
    }

    if (aLeft > bRight) {
      high = cutA - 1;
    } else {
      low = cutA + 1;
    }
  }
};

exports.findMedianSortedArrays = findMedianSortedArrays;
