import { UnionOrderI } from '../../interfaces/interfaces';
import normalizeOrder from './normalizeOrder';

export default function deepCompareOrders() {
  let orders = JSON.parse(localStorage.getItem('orders') || '[]');
  const uniqOrders = new Map();

  for (let order of orders) {
    let key = normalizeOrder(order);
    console.log(key);

    if (!uniqOrders.has(key)) {
      uniqOrders.set(key, {
        ...order,
        quantity: 1,
        singleProductDiscountSum: order.totalDiscountSum,
        singleProductTotalSum: order.totlatPrice,
        hasPromoCode: false,
        totlatPriceWithPromoCode: 0,
        totalDiscountSumWithPromoCode: 0,
      });
    } else {
      uniqOrders.get(key).quantity += 1;
      uniqOrders.get(key).totalDiscountSum =
        uniqOrders.get(key).singleProductDiscountSum *
        uniqOrders.get(key).quantity;
      uniqOrders.get(key).totlatPrice =
        uniqOrders.get(key).singleProductTotalSum *
        uniqOrders.get(key).quantity;
      uniqOrders.get(key).hasPromoCode = false;
      uniqOrders.get(key).totlatPriceWithPromoCode = 0;
      uniqOrders.get(key).totalDiscountSumWithPromoCode = 0;
    }
  }

  console.log(uniqOrders.values());

  return Array.from(uniqOrders.values());
}
