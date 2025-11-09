import { OrderI } from '../../interfaces/interfaces';

export default function normalizeOrder(order: OrderI) {
  return JSON.stringify({
    id: order.id,
    name: order.name,
    selectSize: order.selectSize,
    size: order.size,
    extras: [...order.extras].sort(),
    discountPrice: order.discountPrice,
    totlatPrice: order.totlatPrice,
    totalDiscountSum: order.totalDiscountSum,
    price: order.price,
  });
}
