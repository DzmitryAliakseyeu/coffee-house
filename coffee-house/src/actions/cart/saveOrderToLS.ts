import { OrderI } from '../../interfaces/interfaces';
import deepCompareOrders from './compareOrders';

export default function saveOrderToLS(obj: OrderI) {
  const product = { ...obj };

  let storedOrders = localStorage.getItem('orders');

  const orders = storedOrders ? JSON.parse(storedOrders) : [];

  orders.push(product);

  localStorage.setItem('orders', JSON.stringify(orders));

  let unionOrders = deepCompareOrders();

  localStorage.setItem('unionOrders', JSON.stringify(unionOrders));
}
