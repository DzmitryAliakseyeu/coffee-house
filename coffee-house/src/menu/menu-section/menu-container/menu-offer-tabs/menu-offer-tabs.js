import { menuOfferTabsData } from '../../../../data/menu-offer-tabs-data';

import filterProducts from '../../menu-products/filter-products/filter-products';

import createPreviewCard from '../../menu-products/preview-card/preview-card';
import './menu-offer-tabs.css';

export default function createMenuOfferTabs(parent) {
  const menuOfferTabs = document.createElement('ul');
  menuOfferTabs.classList.add('menu-offer-tabs');
  parent.append(menuOfferTabs);

  menuOfferTabsData.forEach((tabI, i) => {
    const tab = document.createElement('li');
    tab.classList.add('tab-item');
    tab.classList.add(`tab-${tabI.title.toLowerCase()}`);
    tab.id = tabI.title.toLowerCase();
    if (i === 0) {
      tab.classList.add('tab-active');
    }

    tab.addEventListener('click', () => {
      const id = tab.id;
      console.log(id);
      const prevActiveTab = document.querySelector('.tab-active');
      prevActiveTab.classList.remove('tab-active');

      const clickedTab = document.getElementById(id);
      clickedTab.classList.add('tab-active');

      let newFilteredProducts = filterProducts(id);

      const menuProductsGrid = document.querySelector('.menu-products-grid');

      const prevCards = document.querySelectorAll('.preview-card');

      const loadButton = document.querySelector('.button-load');
      loadButton.classList.remove('hidden');

      prevCards.forEach((card) => card.remove());

      newFilteredProducts.forEach((product) => {
        createPreviewCard(
          menuProductsGrid,
          `../../../../public/products/${product.name}.png`,
          product.name,
          product.description,
          `$${product.price}`,
        );
      });

      const previewCards = document.querySelectorAll('.preview-card');

      const hiddenCards = Array.from(previewCards).filter(
        (card) => window.getComputedStyle(card).display === 'none',
      );

      if (hiddenCards.length === 0) {
        loadButton.classList.add('hidden');
      }
    });

    menuOfferTabs.append(tab);

    const tabLink = document.createElement('a');
    tabLink.classList.add('tab-link');
    tab.append(tabLink);

    const tabIcon = document.createElement('span');
    tabIcon.classList.add(`tab-icon`);
    tabIcon.classList.add(`tab-${tabI.title.toLowerCase()}-icon`);
    tabLink.append(tabIcon);

    const tabTitle = document.createElement('span');
    tabTitle.classList.add(`link-and-button`);
    tabTitle.classList.add(`text-dark`);
    tabTitle.classList.add(`tab-text`);
    tabTitle.classList.add(`tab-${tabI.title.toLowerCase()}-text`);
    tabTitle.textContent = tabI.title;

    tabLink.append(tabTitle);
  });
}
