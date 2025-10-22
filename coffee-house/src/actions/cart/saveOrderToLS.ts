import { OrderI, ProductInLSI } from "../../interfaces/interfaces";

export default function saveOrderToLS(obj: OrderI){
    const product = {...obj};

    let storedOrders = localStorage.getItem('orders');

    const orders = storedOrders ? JSON.parse(storedOrders) : [];

    orders.push(product);

    localStorage.setItem('orders', JSON.stringify(orders));
}