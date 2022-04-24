let count = 0;

function fibonacci(n) {
  count++;
  if (n <= 2) return 1;

  return fibonacci(n - 1) + fibonacci(n - 2);
}

function cachedFibonacci(n, cache = {}) {
  count++;
  if (cache[n]) return cache[n];
  if (n <= 2) return 1;

  cache[n] = cachedFibonacci(n - 1, cache) + cachedFibonacci(n - 2, cache);
  return cache[n];
}

function fibonacciGenerator() {
  const cache = {};

  return function recursiveFibonacci(n) {
    count++;
    if (cache[n]) return cache[n];
    if (n <= 2) return 1;

    cache[n] = recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
    return cache[n];
  };
}

// count = 0;
// console.log(fibonacci(15));
// console.log("count: ", count);

// count = 0;
// console.log(cachedFibonacci(15));
// console.log("count: ", count);

// for (let i = 1; i < 15; i++) {
//   console.log(cachedFibonacci(i));
// }

const gibGen = fibonacciGenerator();

for (let i = 1; i < 15; i++) {
  console.log(gibGen(i));
}

console.log("count: ", count);
