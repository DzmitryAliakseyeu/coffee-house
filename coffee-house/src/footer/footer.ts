import './footer.css';
import createContactsInfo from './offerFooter/contacts-info/contacts-info';
import createOfferFooter from './offerFooter/offerFooter';

export default function createFooter(parent: HTMLElement) {
  const footer = document.createElement('footer');
  footer.classList.add('footer');
  parent.append(footer);
  footer.id = 'contact-us';

  const containerSection = document.createElement('section');
  containerSection.classList.add('container-section');
  containerSection.classList.add('bgc-dark');
  footer.append(containerSection);

  createOfferFooter(containerSection);
  createContactsInfo(containerSection);
}
