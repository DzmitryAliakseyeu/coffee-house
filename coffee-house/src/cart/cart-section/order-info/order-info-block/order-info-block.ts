import { OrderI } from "../../../../interfaces/interfaces";
import getProfile from "../../../../requests/getProfile";
import './order-info-block.css'

export default async function createOrderInfoBlock(parent: HTMLElement, title: string){

    const orderInfoBlock = document.createElement('div');
        orderInfoBlock.classList.add(`${title.toLowerCase().replace(/\s+/g, '-')}-block`);
        parent.append(orderInfoBlock);
    
        const orderInfoTitle = document.createElement('h3');
        orderInfoTitle.classList.add('order-info-title');
        orderInfoTitle.classList.add('heading-3');
        orderInfoTitle.classList.add('text-dark');
        orderInfoBlock.append(orderInfoTitle);
        orderInfoTitle.textContent = `${title}:`;
    
        const orederInfoText =  document.createElement('h3');
        orederInfoText.classList.add('order-info-text');
        orederInfoText.classList.add('heading-3');
        orederInfoText.classList.add('text-dark');
        orderInfoBlock.append(orederInfoText);
        if(title === 'Total'){
             let productsInLS = JSON.parse(localStorage.getItem('orders') ?? '[]');
            let totalOrderSum = productsInLS.reduce((acc: number, item: OrderI) => acc + item.totlatPrice, 0);
            orederInfoText.textContent = `$${totalOrderSum.toFixed(2)}`;
        } else if(title === 'Address'){
           
               let token =localStorage.getItem('token')
           if(token){
                let response =await getProfile(token);
                orederInfoText.textContent = `${response.data.city}, ${response.data.street}, ${response.data.houseNumber}`;
           }
          
           
        } else if(title === 'Pay by'){
              let token =localStorage.getItem('token')
           if(token){
                let response =await getProfile(token);
                 orederInfoText.textContent = `${response.data.paymentMethod.charAt(0).toUpperCase() + response.data.paymentMethod.slice(1)}`;
           }
        }
}