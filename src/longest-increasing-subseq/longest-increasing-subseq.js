function getLongestIncreasingSubSequence(array) {
  const dp = [1];

  for (let i = 1; i < array.length; i++) {
    dp.push(1);

    for (let j = 0; j < i; j++) {
      if (array[j] < array[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max(...dp);
}

const arr = [2, 3, 6, 4, 1, 3, 5, 4, 7];
console.log(getLongestIncreasingSubSequence(arr));
