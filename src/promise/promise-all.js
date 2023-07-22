function promiseAll(promises) {
  let resolvedCount = 0;
  const data = [];
  const resultPromise = new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      promise
        .then((promiseData) => {
          data[index] = promiseData;
          resolvedCount++;

          if (resolvedCount === promises.length) {
            resolve(data);
          }
        })
        .catch((error) => reject(error));
    });
  });

  return resultPromise;
}

module.exports = promiseAll;
