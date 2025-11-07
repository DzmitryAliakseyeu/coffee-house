import normalizeOrder from './normalizeOrder';

export default function deepCompareOrders() {
  let orders = JSON.parse(localStorage.getItem('orders') || '[]');
  const uniqOrders = new Map();

  for (let order of orders) {
    let key = normalizeOrder(order);
    console.log(key);

    if (!uniqOrders.has(key)) {
      uniqOrders.set(key, { ...order, quantity: 1 });
    } else {
      uniqOrders.get(key).quantity += 1;
    }
  }

  console.log(uniqOrders.values());

  return Array.from(uniqOrders.values());
}
