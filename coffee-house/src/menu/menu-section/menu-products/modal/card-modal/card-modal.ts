import './card-modal.css';
import createButton from '../../../../../button/button';
import { OrderI, ProductInLSI, ProductsDataI } from '../../../../../interfaces/interfaces';
import saveOrderToLS from '../../../../../actions/cart/saveOrderToLS';

let sum = [0];

let order: OrderI = {
  id: '',
  name: '',
  selectSize: '',
  extras: [],
  price: {
    base: 0,
    size: 0,
    discount: 0,
    additivies: [],
  },
  totlatPrice: 0
}

export default function createModalCard(
  parent: HTMLElement,
  product: ProductsDataI,
) {
  const productData: ProductsDataI = product;
  console.log(product);
  const regularPrice = product.price;
  // const discountPrice = product.discountPrice;

  order.id = product.id;
  order.name = product.name;
  order.selectSize = product.sizes.s.size;
  order.price.base = Number(product.sizes.s.price);
  order.totlatPrice = order.price.base
 


  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' || event.key === 'Esc') {
      parent.remove();
       document.body.classList.remove('no-scroll');
    }
  });


  const modalCard = document.createElement('div');
  modalCard.classList.add('modal-card');
  parent.append(modalCard);

  createButton({
    parent: modalCard,
    className: 'close-modal',
    action: () => {
    parent.remove();
    document.body.classList.remove('no-scroll');
    },
    text: '<span class="close-modal-line line-1"></span> <span  class="close-modal-line line-2"></span>',
    hasIcon: false,
    isHtml: true,
  });

  

  const contentContainer = document.createElement('div');
  contentContainer.classList.add('content-container');
  modalCard.append(contentContainer);

  const imgCardBlock = document.createElement('img');
  imgCardBlock.classList.add('img-card-block');
  contentContainer.append(imgCardBlock);
  imgCardBlock.src = `../../../../../../public/products/${productData.name}.png`;

  const contentCardBlock = document.createElement('div');
  contentCardBlock.classList.add('content-card-block');
  contentContainer.append(contentCardBlock);

  const textContentCardBlock = document.createElement('div');
  textContentCardBlock.classList.add('text-content-card-block');
  contentCardBlock.append(textContentCardBlock);

  const titleCard = document.createElement('h3');
  titleCard.classList.add('heading-3');
  titleCard.classList.add('text-dark');
  titleCard.classList.add('preview-card-title');
  textContentCardBlock.append(titleCard);
  titleCard.textContent = productData.name;

  const descriptionCard = document.createElement('p');
  descriptionCard.classList.add('medium');
  descriptionCard.classList.add('text-dark');
  descriptionCard.classList.add('preview-card-description');
  textContentCardBlock.append(descriptionCard);
  descriptionCard.textContent = productData.description;

  for (let i = 0; i < 2; i++) {
    const typeOfButtons = document.createElement('div');
    typeOfButtons.classList.add('type-of-buttons');
    contentCardBlock.append(typeOfButtons);

    const type = document.createElement('p');
    type.classList.add('medium');
    type.classList.add('text-dark');
    type.classList.add('text-type');
    typeOfButtons.append(type);

    const cardOfferTabs = document.createElement('ul');
    cardOfferTabs.classList.add('card-offer-tabs');
    typeOfButtons.append(cardOfferTabs);

    let tabsData;
    if (i === 0) {
      type.textContent = 'Size';
      tabsData = Object.entries(productData.sizes).map(([key, value]) => ({
        key: key.toUpperCase(),
        title: value.size,
        // addPrice: value['add-price'],
        addPrice: value.price,
        field: 'size',
      }));
    } else {
      type.textContent = 'Additives';
      tabsData = productData.additives.map((additive, index) => ({
        key: index + 1,
        title: additive.name,
        addPrice: additive.price,
        field: 'additives',
      }));
    }

    tabsData.forEach((tabI, index) => {
      console.log(tabI);

      const tab = document.createElement('li') as HTMLLIElement;
      tab.classList.add('tab-item');
      tab.classList.add(`tab-${tabI.key}`);
      tab.id = String(tabI.key);
      if (index === 0 && typeof tabI.key === 'string')
        tab.classList.add('tab-active');
      cardOfferTabs.append(tab);

      tab.addEventListener('click', () => {
        if (tabI.field === 'size') {
          const activeSize = cardOfferTabs.querySelector('.tab-active');
          if (activeSize && activeSize !== tab) {
            activeSize.classList.remove('tab-active');
            order.price.size = +tabI.addPrice
          }

          if (!tab.classList.contains('tab-active')) {
            tab.classList.add('tab-active');
            order.selectSize = tabI.title;
          }
       
        }

        if (tabI.field === 'additives') {
          if (tab.classList.contains('tab-active')) {
            tab.classList.remove('tab-active');
           order.extras = order.extras.filter(item => item !== tabI.title);
        const index = order.price.additivies.indexOf(+tabI.addPrice);
  if (index !== -1) order.price.additivies.splice(index, 1);
           
          } else {
            tab.classList.add('tab-active');
            order.extras.push(tabI.title)
            order.price.additivies.push(+tabI.addPrice)
           
          }
        }

   console.log(order)

        let addivitesPriceSum = order.price.additivies.reduce((acc, el) => acc + el, 0);
        let totalSum = addivitesPriceSum + order.price.size;

        order.totlatPrice = totalSum



        totalPrice.textContent = `$${totalSum.toFixed(2)}`;

      });

      const tabLink = document.createElement('a');
      tabLink.classList.add('tab-link');
      tab.append(tabLink);

      const tabIcon = document.createElement('span') as HTMLElement;
      (tabIcon.classList.add('tab-icon'),
        tabIcon.classList.add('medium'),
        tabIcon.classList.add(`tab-${tabI.key}-icon-text`));
      tabIcon.textContent = String(tabI.key);
      tabLink.append(tabIcon);

      const tabTitle = document.createElement('span');
      tabTitle.classList.add('link-and-button');
      tabTitle.classList.add('text-dark');
      tabTitle.classList.add('tab-text');
      tabTitle.classList.add(`tab-${tabI.key}-text`);
      tabTitle.textContent = tabI.title;
      tabLink.append(tabTitle);
    });
  }

  const total = document.createElement('div');
  total.classList.add('total');
  contentCardBlock.append(total);

  const totalTitle = document.createElement('h3');
  totalTitle.classList.add('heading-3');
  totalTitle.classList.add('text-dark');
  totalTitle.classList.add('total-title');
  total.append(totalTitle);
  totalTitle.textContent = 'Total:';

  const totalPrice = document.createElement('h3');
  totalPrice.classList.add('heading-3');
  totalPrice.classList.add('text-dark');
  totalPrice.classList.add('total-price');
  total.append(totalPrice);

  const totalValue = sum.reduce((acc, el) => acc + el, 0);
  let finalPrice = +totalValue + +regularPrice;

  // totalPrice.textContent = `$${+totalValue.toFixed(2)++regularPrice}`;
  totalPrice.textContent = `$${finalPrice.toFixed(2)}`;

  const alert = document.createElement('div');
  alert.classList.add('alert');
  contentCardBlock.append(alert);

  const alertIcon = document.createElement('span');
  alertIcon.classList.add('alert-icon');
  alert.append(alertIcon);

  const alertText = document.createElement('p');
  alertText.classList.add('alert-text');
  alertText.classList.add('caption');
  alert.append(alertText);

  alertText.textContent =
    'The cost is not final. Download our mobile app to see the final price and place your order. Earn loyalty points and enjoy your favorite coffee with up to 20% discount.';

  createButton({
    parent: contentCardBlock,
    className: 'add-to-cart',
    action: () => {
     
      saveOrderToLS(order);
     
       const cartQuantity = document.querySelector('.cart-quantity') as HTMLElement;
      let productsInLS = JSON.parse(localStorage.getItem('orders') ?? '[]');
        
         
      cartQuantity.textContent = productsInLS.length;

    

     const cartButtonBlockHidden = document.querySelector('.button-cart-text-hidden') as HTMLElement;
     if(cartButtonBlockHidden ){
        cartButtonBlockHidden.classList.remove('button-cart-text-hidden')
     }
     
    
      const modal = document.querySelector('.modal') as HTMLElement;
      modal.remove();
      document.body.classList.remove('no-scroll');
    },
    text: 'Add to cart',
  });
}
