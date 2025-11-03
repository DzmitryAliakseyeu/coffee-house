import './menu-container.css';
import createMenuOfferTabs from './menu-offer-tabs/menu-offer-tabs';

export default function createMenuOfferContainer(parent: HTMLElement) {
  const menuOfferContainer = document.createElement('div');
  menuOfferContainer.classList.add('menu-offer-container');
  parent.append(menuOfferContainer);

  const sectionTitle = document.createElement('h2');
  sectionTitle.classList.add('heading-2');
  sectionTitle.classList.add('text-dark');
  sectionTitle.classList.add('menu-offer-title');
  menuOfferContainer.append(sectionTitle);
  sectionTitle.innerHTML =
    'Behind each of our cups hides an <span class="text-accent">amazing surprise</span>';

  createMenuOfferTabs(menuOfferContainer);
}
