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

all([p1, p2, p3]).then(console.log).catch(console.log);

const p21 = Promise.resolve(1);
const p22 = delayResolve(2, 2000);
const p23 = Promise.resolve(3);

all([p21, p22, p23]).then(console.log).catch(console.log);

const p31 = Promise.resolve(1);
const p32 = Promise.resolve(2);
const p33 = Promise.reject("error");

all([p31, p32, p33]).then(console.log).catch(console.log);

function delayResolve(data, delay) {
  return new Promise((resolve) => setTimeout(() => resolve(data), delay));
}
