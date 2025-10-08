import { menuOfferTabsData } from '../../../../data/menu-offer-tabs-data';
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
