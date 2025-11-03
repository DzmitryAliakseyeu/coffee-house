import './card-modal.css';
import createButton from '../../../../../button/button';

let sum = [0];
let sizeArr = [];

export default function createModalCard(parent, product) {
  const productData = product[0];
  const modalCard = document.createElement('div');
  modalCard.classList.add('modal-card');
  parent.append(modalCard);

  const contentContainer = document.createElement('div');
  contentContainer.classList.add('content-container');
  modalCard.append(contentContainer);

  const imgCardBlock = document.createElement('img');
  imgCardBlock.classList.add('img-card-block');
  contentContainer.append(imgCardBlock);
  imgCardBlock.src = `../products/${productData.name}.png`;

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
        addPrice: value['add-price'],
        field: 'size',
      }));
    } else {
      type.textContent = 'Additives';
      tabsData = productData.additives.map((additive, index) => ({
        key: index + 1,
        title: additive.name,
        addPrice: additive['add-price'],
        field: 'additives',
      }));
    }

    tabsData.forEach((tabI, index) => {
      console.log(tabI);

      const tab = document.createElement('li');
      tab.classList.add('tab-item');
      tab.classList.add(`tab-${tabI.key}`);
      tab.id = tabI.key;
      if (index === 0 && typeof tabI.key === 'string')
        tab.classList.add('tab-active');
      cardOfferTabs.append(tab);

      tab.addEventListener('click', () => {
        if (tabI.field === 'size') {
          const activeSize = cardOfferTabs.querySelector('.tab-active');
          if (activeSize && activeSize !== tab) {
            activeSize.classList.remove('tab-active');
            // const idx = sum.indexOf(+activeSize.dataset.price);
            // if (idx !== -1) sum.splice(idx, 1);
            sizeArr.pop();
          }

          if (!tab.classList.contains('tab-active')) {
            tab.classList.add('tab-active');
            // sum.push(+tabI.addPrice);
            sizeArr.push(+tabI.addPrice);
          }
        }

        if (tabI.field === 'additives') {
          if (tab.classList.contains('tab-active')) {
            tab.classList.remove('tab-active');
            const idx = sum.indexOf(+tabI.addPrice);
            if (idx !== -1) sum.splice(idx, 1);
          } else {
            tab.classList.add('tab-active');
            sum.push(+tabI.addPrice);
          }
        }

        const totalValue = sum.concat(sizeArr).reduce((acc, el) => acc + el, 0);
        totalPrice.textContent = `$${totalValue.toFixed(2)}`;
      });

      const tabLink = document.createElement('a');
      tabLink.classList.add('tab-link');
      tab.append(tabLink);

      const tabIcon = document.createElement('span');
      (tabIcon.classList.add('tab-icon'),
        tabIcon.classList.add('medium'),
        tabIcon.classList.add(`tab-${tabI.key}-icon-text`));
      tabIcon.textContent = tabI.key;
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

  totalPrice.textContent = `$${totalValue.toFixed(2)}`;

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

  createButton(
    contentCardBlock,
    'close-modal',
    () => {
      const modal = document.querySelector('.modal');
      modal.remove();
      document.body.classList.remove('no-scroll');
    },
    'Close',
  );
}
