import updateLocalStorageData from '../../../../actions/cart/update-ls-data';
import { OrderI } from '../../../../interfaces/interfaces';
import getProfile from '../../../../requests/getProfile';
import './order-info-block.css';

type OrderInfoTitle = 'Total' | 'Address' | 'Pay by' | string;

export default async function createOrderInfoBlock(
  parent: HTMLElement,
  title: OrderInfoTitle,
) {
  let token = localStorage.getItem('token');

  const orderInfoBlock = document.createElement('div');
  orderInfoBlock.classList.add(
    `${title.toLowerCase().replace(/\s+/g, '-')}-block`,
  );
  parent.append(orderInfoBlock);

  const orderInfoTitle = document.createElement('h3');
  orderInfoTitle.classList.add('order-info-title');
  orderInfoTitle.classList.add('heading-3');
  orderInfoTitle.classList.add('text-dark');
  orderInfoBlock.append(orderInfoTitle);
  orderInfoTitle.textContent = `${title}:`;

  if (title === 'Total') {
    const totalPriceBlock = document.createElement('div');
    totalPriceBlock.classList.add('totla-price-block-cart');
    orderInfoBlock.append(totalPriceBlock);

    const orederInfoText = document.createElement('h3');
    orederInfoText.classList.add('order-info-text');
    orederInfoText.classList.add(
      `order-${title.toLowerCase().replace(/\s+/g, '-')}-info-text`,
    );
    orederInfoText.classList.add('heading-3');
    orederInfoText.classList.add('text-dark');
    totalPriceBlock.append(orederInfoText);

    // let productsInLS = JSON.parse(localStorage.getItem('orders') ?? '[]');
    // let totalOrderSum = productsInLS.reduce(
    //   (acc: number, item: OrderI) => acc + item.totlatPrice,
    //   0,
    // );
    // let totalDiscountSum = productsInLS.reduce(
    //   (acc: number, item: OrderI) => acc + item.totalDiscountSum,
    //   0,
    // );

    // let poductsWithoutDiscount = productsInLS.filter(
    //   (item: OrderI) => item.totalDiscountSum === 0,
    //   0,
    // );

    // let sumPricesPoductsWithoutDiscount = poductsWithoutDiscount.reduce(
    //   (acc: number, item: OrderI) => acc + item.totlatPrice,
    //   0,
    // );

    let unionOrdesInLS = JSON.parse(
      localStorage.getItem('unionOrders') ?? '[]',
    );

    let totalOrderSum = unionOrdesInLS.reduce(
      (acc: number, item: OrderI) => acc + item.totlatPrice,
      0,
    );
    let totalDiscountSum = unionOrdesInLS.reduce(
      (acc: number, item: OrderI) => acc + item.totalDiscountSum,
      0,
    );

    let poductsWithoutDiscount = unionOrdesInLS.filter(
      (item: OrderI) => item.totalDiscountSum === 0,
      0,
    );

    let sumPricesPoductsWithoutDiscount = poductsWithoutDiscount.reduce(
      (acc: number, item: OrderI) => acc + item.totlatPrice,
      0,
    );

    orederInfoText.textContent = `$${totalOrderSum.toFixed(2)}`;

    if (totalDiscountSum > 0 && token) {
      orederInfoText.classList.add('unavaliable-price');
      const discountPriceProduct = document.createElement('h3');
      discountPriceProduct.classList.add('heading-3');
      discountPriceProduct.classList.add('text-dark');
      discountPriceProduct.classList.add('cart-card-price');
      discountPriceProduct.classList.add('total-discount-price');
      totalPriceBlock.append(discountPriceProduct);
      discountPriceProduct.textContent = `$${(totalDiscountSum + sumPricesPoductsWithoutDiscount).toFixed(2)}`;
      return;
    }
  }

  const orderInfoText = document.createElement('h3');
  orderInfoText.classList.add('order-info-text');
  orderInfoText.classList.add(
    `order-${title.toLowerCase().replace(/\s+/g, '-')}-info-text`,
  );
  orderInfoText.classList.add('heading-3');
  orderInfoText.classList.add('text-dark');
  orderInfoBlock.append(orderInfoText);

  if (token) {
    let response = await getProfile(token);
    if (title === 'Address') {
      orderInfoText.textContent = `${response.data.city}, ${response.data.street}, ${response.data.houseNumber}`;
    }

    if (title === 'Pay by') {
      orderInfoText.textContent = `${response.data.paymentMethod.charAt(0).toUpperCase() + response.data.paymentMethod.slice(1)}`;
    }
  }

  // if (title === 'Address') {
  //   let token = localStorage.getItem('token');
  //   if (token) {
  //     let response = await getProfile(token);
  //     orederInfoText.textContent = `${response.data.city}, ${response.data.street}, ${response.data.houseNumber}`;
  //   }
  // } else if (title === 'Pay by') {
  //   let token = localStorage.getItem('token');
  //   if (token) {
  //     let response = await getProfile(token);
  //     orederInfoText.textContent = `${response.data.paymentMethod.charAt(0).toUpperCase() + response.data.paymentMethod.slice(1)}`;
  //   }
  // }

  // if (title === 'Total') {
  // let productsInLS = JSON.parse(localStorage.getItem('orders') ?? '[]');
  // let totalOrderSum = productsInLS.reduce(
  //   (acc: number, item: OrderI) => acc + item.totlatPrice,
  //   0,
  // );
  // let totalDiscountSum = productsInLS.reduce(
  //   (acc: number, item: OrderI) => acc + item.totalDiscountSum,
  //   0,
  // );
  // let token = localStorage.getItem('token')
  // orederInfoText.textContent = `$${totalOrderSum.toFixed(2)}`;
  //         if (totalDiscountSum > 0 && token) {
  // orederInfoText.classList.add('unavaliable-price');
  // const discountPriceProduct = document.createElement('h3');
  // discountPriceProduct.classList.add('heading-3');
  // discountPriceProduct.classList.add('text-dark');
  // discountPriceProduct.classList.add('cart-card-price');
  // orderInfoBlock.append(discountPriceProduct);
  // discountPriceProduct.textContent = `$${totalDiscountSum.toFixed(2)}`;
  // } else {
  //   orederInfoText.classList.remove('unavaliable-price');
  // }
  // } else if (title === 'Address') {
  //   let token = localStorage.getItem('token');
  //   if (token) {
  //     let response = await getProfile(token);
  //     orederInfoText.textContent = `${response.data.city}, ${response.data.street}, ${response.data.houseNumber}`;
  //   }
  // } else if (title === 'Pay by') {
  //   let token = localStorage.getItem('token');
  //   if (token) {
  //     let response = await getProfile(token);
  //     orederInfoText.textContent = `${response.data.paymentMethod.charAt(0).toUpperCase() + response.data.paymentMethod.slice(1)}`;
  //   }
  // }
}
