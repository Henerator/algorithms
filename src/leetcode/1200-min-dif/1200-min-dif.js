/**
 * @param {number[]} arr
 * @return {number[][]}
 */
function minimumAbsDifference(arr) {
  const n = arr.length;
  arr.sort((a, b) => a - b);

  let minDif = Infinity;
  arr.reduce((prev, cur) => {
    minDif = Math.min(minDif, cur - prev);
    return cur;
  });

  let pairs = [];
  let index = 0;

  while (index < n - 1) {
    if (arr[index + 1] - arr[index] === minDif) {
      pairs.push([arr[index], arr[index + 1]]);
    }

    index++;
  }

  return pairs;
}

exports.minimumAbsDifference = minimumAbsDifference;
