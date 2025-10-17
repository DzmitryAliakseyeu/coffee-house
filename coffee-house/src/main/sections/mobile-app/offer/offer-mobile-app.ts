import createOfferMAButtons from './offer-buttons/offer-ma-buttons';
import './offer-mobile-app.css';

export default function createOffer(parent: HTMLElement) {
  const offer = document.createElement('div');
  offer.classList.add('offer-mobile-app');
  parent.append(offer);

  const sectionTitle = document.createElement('h2');
  sectionTitle.classList.add('heading-2');
  sectionTitle.classList.add('text-dark');
  sectionTitle.classList.add('offer-ma-title');
  offer.append(sectionTitle);
  sectionTitle.innerHTML =
    '<span class="text-accent">Download</span> our apps to start ordering';

  const offerText = document.createElement('p');
  offerText.classList.add('medium');
  offerText.classList.add('text-dark');
  offerText.classList.add('offer-text');
  offerText.innerHTML = `Download the Resource app today and experience the comfort of ordering your favorite coffee from wherever you are`;
  offer.append(offerText);

  createOfferMAButtons(offer);
}
