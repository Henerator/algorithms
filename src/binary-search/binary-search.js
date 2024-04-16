function binarySearch(arr, predicate) {
  function recursiveSearch(left, right) {
    if (left > right) return -1;

    const middle = left + Math.floor((left + right) / 2);
    const midCondition = predicate(arr[middle]);

    if (midCondition === 0) {
      return middle;
    }

    if (midCondition > 0) {
      return recursiveSearch(middle + 1, right);
    }

    return recursiveSearch(left, middle - 1);
  }

  return recursiveSearch(0, arr.length - 1);
}

exports.binarySearch = binarySearch;
