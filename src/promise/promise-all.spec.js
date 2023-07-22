const promiseAll = require('./promise-all');

test('all resolved', () => {
  const p1 = Promise.resolve(1);
  const p2 = Promise.resolve(2);
  const p3 = Promise.resolve(3);

  promiseAll([p1, p2, p3]).then((data) => {
    expect(data).toEqual([1, 2, 3]);
  });
});

// promiseAll([p1, p2, p3]).then(console.log).catch(console.log);

// const p21 = Promise.resolve(1);
// const p22 = delayResolve(2, 2000);
// const p23 = Promise.resolve(3);

// promiseAll([p21, p22, p23]).then(console.log).catch(console.log);

// const p31 = Promise.resolve(1);
// const p32 = Promise.resolve(2);
// const p33 = Promise.reject("error");

// promiseAll([p31, p32, p33]).then(console.log).catch(console.log);

// function delayResolve(data, delay) {
//   return new Promise((resolve) => setTimeout(() => resolve(data), delay));
// }
