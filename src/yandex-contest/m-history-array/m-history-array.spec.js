const { HistoricalArray } = require('./m-history-array-v2');

it('test 1', () => {
  const hArr = new HistoricalArray();

  hArr.set(0, 3);
  hArr.set(1, 8);

  hArr.beginNewEra(6000);

  expect(hArr.get(0, 0)).toEqual(3);
  expect(hArr.get(1, 0)).toEqual(8);

  hArr.set(0, 9);

  hArr.beginNewEra(1000000);

  expect(hArr.get(0, 6000)).toEqual(9);
  expect(hArr.get(0, 0)).toEqual(3);
});

it('test 2', () => {
  const hArr = new HistoricalArray();

  hArr.set(0, 1);
  hArr.set(0, 2);
  hArr.beginNewEra(1000);
  hArr.set(0, 4);
  hArr.set(0, 100);
  hArr.beginNewEra(666);
  hArr.set(0, 7);
  hArr.set(0, 42);
  hArr.beginNewEra(424242);

  expect(hArr.get(0, 0)).toEqual(2);
  expect(hArr.get(0, 666)).toEqual(42);
  expect(hArr.get(0, 1000)).toEqual(100);
});

it('test 3', () => {
  const hArr = new HistoricalArray();

  hArr.beginNewEra(1);
  hArr.beginNewEra(2);

  expect(hArr.get(0, 0)).toEqual(0);
});
