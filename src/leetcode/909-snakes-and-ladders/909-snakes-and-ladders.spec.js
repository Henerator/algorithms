const { snakesAndLadders } = require('./909-snakes-and-ladders');

it('test 1', () => {
  const input = [
    [-1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1],
    [-1, 35, -1, -1, 13, -1],
    [-1, -1, -1, -1, -1, -1],
    [-1, 15, -1, -1, -1, -1],
  ];
  expect(snakesAndLadders(input)).toEqual(4);
});

// it('test 2', () => {
//   const input = [
//     [-1, -1],
//     [-1, 3],
//   ];
//   expect(snakesAndLadders(input)).toEqual(1);
// });
