import './delivery-address.css'

export default function createDeliveryAddress(parent: HTMLElement, title: string, text: string){
    const addressBlock = document.createElement('div');
    addressBlock.classList.add('address-block');
    parent.append(addressBlock);

    const addressTitle = document.createElement('h3');
    addressTitle.classList.add('address-title');
    addressTitle.classList.add('heading-3');
    addressTitle.classList.add('text-dark');
    addressBlock.append(addressTitle);
    addressTitle.textContent = `${title}`


    const addressText = document.createElement('h3');
    addressText.classList.add('address-text');
    addressText.classList.add('heading-3');
    addressText.classList.add('text-dark');
    addressBlock.append(addressText);
    addressText.textContent = `${text}`


}