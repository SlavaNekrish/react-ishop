import { calcTotalPrice } from '../utils/calcTotalPrice';

localStorage.setItem(
  'test',
  JSON.stringify([
    { name: 'a', price: '10', count: '1' },
    { name: 'b', price: '20', count: '2' },
    { name: 'c', price: '30', count: '3' },
  ]),
);

const getCartFromLSTest = () => {
  const data = localStorage.getItem('test');
  const items = data ? JSON.parse(data) : [];
  const totalPrice = calcTotalPrice(items);

  return {
    items,
    totalPrice,
  };
};

it('should return correct objects quantity in test array', () => {
  //action
  const { items } = getCartFromLSTest();

  //expectations
  expect(items.length).toBe(3);
});

it('should return correct totalPrice', () => {
  //action
  const { totalPrice } = getCartFromLSTest();

  //expectations
  expect(totalPrice).toBe(140);
});
