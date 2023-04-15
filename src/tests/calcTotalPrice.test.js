import { calcTotalPrice } from '../utils/calcTotalPrice';

//test data
const testArr1 = [
  { name: 'a', price: 10, count: 1 },
  { name: 'b', price: 20, count: 2 },
  { name: 'c', price: 30, count: 3 },
];

const testArr2 = [
  { name: 'd', price: '2', count: 10 },
  { name: 'e', price: '3', count: 20 },
  { name: 'f', price: '4', count: 30 },
];

it('correct calculations', () => {
  //action
  const newCalculations1 = calcTotalPrice(testArr1);
  const newCalculations2 = calcTotalPrice(testArr2);

  //expectations
  expect(newCalculations1).toBe(140);
  expect(newCalculations2).toBe(200);
});

it('correct type of outcome value', () => {
  //action
  const newCalculations1 = calcTotalPrice(testArr1);
  const newCalculations2 = calcTotalPrice(testArr2);

  //expectations
  expect(typeof newCalculations1).toBe('number');
  expect(typeof newCalculations2).toBe('number');
});
