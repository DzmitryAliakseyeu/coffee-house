import './mobile-app.css';
import createMobile from './mobile/mobile';
import createOffer from './offer/offer-mobile-app';

export default function createMobileAppSection(parent) {
  const sectionMobileApp = document.createElement('section');
  sectionMobileApp.classList.add('mobile-app');
  parent.append(sectionMobileApp);
  sectionMobileApp.id = 'mobile-app';

  const containerSection = document.createElement('section');
  containerSection.classList.add('container-section');
  sectionMobileApp.append(containerSection);

  createOffer(containerSection);
  createMobile(containerSection);
}
