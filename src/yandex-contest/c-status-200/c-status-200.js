function getNumberOfGoodPairs(n, numbers) {
  return numbers
    .map((value) => value % 200)
    .reduce(
      (acc, value) => {
        if (acc.hashTable[value]) {
          acc.count += acc.hashTable[value];
          acc.hashTable[value]++;
        } else {
          acc.hashTable[value] = 1;
        }

        return acc;
      },
      { hashTable: {}, count: 0 }
    ).count;
}

exports.getNumberOfGoodPairs = getNumberOfGoodPairs;
