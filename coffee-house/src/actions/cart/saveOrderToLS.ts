import { ProductInLSI } from "../../interfaces/interfaces";

export default function saveOrderToLS({id, name, selectSize, extras, price}: ProductInLSI){
    const product = {id, name, selectSize, extras, price};

    let storedOrders = localStorage.getItem('orders');

    const orders = storedOrders ? JSON.parse(storedOrders) : [];

    orders.push(product);

    localStorage.setItem('orders', JSON.stringify(orders));
}