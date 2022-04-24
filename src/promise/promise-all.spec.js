const promiseAll = require("./promise-all");

test("all resolved", () => {
  const p1 = Promise.resolve(1);
  const p2 = Promise.resolve(2);
  const p3 = Promise.resolve(3);

  promiseAll([p1, p2, p3]).then((data) => {
    expect(data).toEqual([1, 2, 3]);
  });
});
