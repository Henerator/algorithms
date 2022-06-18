const { Building, getMaxFinalCapital } = require('./o-monopoly');

it('test 1', () => {
  const buildings = [
    new Building(1, 1),
    new Building(3, 3),
    new Building(8, 10),
    new Building(4, 1),
    new Building(1, 2),
  ];
  const output = getMaxFinalCapital(buildings, 1, 3);
  expect(output).toEqual(7);
});

it('test 2', () => {
  const buildings = [
    new Building(1, 10),
    new Building(0, 20),
  ];
  const output = getMaxFinalCapital(buildings, 1, 1);
  expect(output).toEqual(21);
});

it('test 3', () => {
  const buildings = [
    new Building(2, 2),
    new Building(3, 3),
  ];
  const output = getMaxFinalCapital(buildings, 1, 2);
  expect(output).toEqual(1);
});

it('empty buildings', () => {
  const buildings = [];
  const output = getMaxFinalCapital(buildings, 1, 2);
  expect(output).toEqual(1);
});

it('zero capital no buildings to take', () => {
  const buildings = [
    new Building(1, 1),
    new Building(2, 2),
  ];
  const output = getMaxFinalCapital(buildings, 0, 2);
  expect(output).toEqual(0);
});

it('zero capital there are buildings to take', () => {
  const buildings = [
    new Building(0, 1),
    new Building(0, 1),
    new Building(3, 3),
    new Building(4, 3),
  ];
  const output = getMaxFinalCapital(buildings, 0, 3);
  expect(output).toEqual(2);
});

it('zero price capital buildings', () => {
  const buildings = [
    new Building(0, 1),
    new Building(0, 2),
    new Building(0, 3),
    new Building(0, 4),
  ];
  const output = getMaxFinalCapital(buildings, 0, 4);
  expect(output).toEqual(10);
});

it('zero price capital buildings with other prices', () => {
  const buildings = [
    new Building(0, 1),
    new Building(0, 2),
    new Building(0, 3),
    new Building(1, 2),
    new Building(1, 10),
    new Building(10, 1),
    new Building(11, 2),
  ];
  const output = getMaxFinalCapital(buildings, 0, 4);
  expect(output).toEqual(17);
});
