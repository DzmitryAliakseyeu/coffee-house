import createOrderInfoBlock from "./order-info-block/order-info-block";
import './order-info.css'

export default function createOrderInfo(parent: HTMLElement){
  const orderInfo = document.createElement('div');
    orderInfo.classList.add('order-info');
    parent.append(orderInfo);

    createOrderInfoBlock(orderInfo, 'Total')
    createOrderInfoBlock(orderInfo, 'Address')
    createOrderInfoBlock(orderInfo, 'Pay by')

}