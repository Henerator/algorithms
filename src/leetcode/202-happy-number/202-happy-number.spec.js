const { isHappy } = require('./202-happy-number');

it('test 1', () => {
  expect(isHappy(19)).toEqual(true);
});

it('test 2', () => {
  expect(isHappy(2)).toEqual(false);
});
