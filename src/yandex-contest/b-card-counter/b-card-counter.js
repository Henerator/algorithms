function getMaxWindowValue(arr, windowSize) {
  const count = arr.length;
  let windowSum = arr
    .slice(0, windowSize)
    .reduce((sum, value) => (sum += value));
  let maxSum = windowSum;

  let offset = 1;
  while (offset <= windowSize) {
    windowSum = windowSum - arr[windowSize - offset] + arr[count - offset];
    maxSum = Math.max(maxSum, windowSum);

    offset++;
  }

  return maxSum;
}

exports.getMaxWindowValue = getMaxWindowValue;
