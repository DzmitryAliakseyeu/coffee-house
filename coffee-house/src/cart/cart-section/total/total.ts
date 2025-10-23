import { OrderI } from "../../../interfaces/interfaces";
import './total.css'

export default function createTotal(parent: HTMLElement){
    const totalBlock = document.createElement('div');
    totalBlock.classList.add('total-block');
    parent.append(totalBlock);

    const totalText = document.createElement('h3');
    totalText.classList.add('total-text');
    totalText.classList.add('heading-3');
    totalText.classList.add('text-dark');
    totalBlock.append(totalText);
    totalText.textContent = 'Total:';

    let productsInLS = JSON.parse(localStorage.getItem('orders') ?? '[]');
    let totalOrderSum = productsInLS.reduce((acc: number, item: OrderI) => acc + item.totlatPrice, 0);
    console.log(totalOrderSum)


    const totalPrice =  document.createElement('h3');
    totalPrice.classList.add('total-price');
    totalPrice.classList.add('heading-3');
    totalPrice.classList.add('text-dark');
    totalBlock.append(totalPrice);
    totalPrice.textContent = `$${totalOrderSum}`;


}