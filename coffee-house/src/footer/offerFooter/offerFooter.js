import './offerFooter.css';
import createSocials from './socials/socials';

export default function createOfferFooter(parent) {
  const offerFooter = document.createElement('div');
  offerFooter.classList.add('offer-footer');
  parent.append(offerFooter);

  const offerFooterTitle = document.createElement('h2');
  offerFooterTitle.classList.add('heading-2');
  offerFooterTitle.classList.add('text-light');
  offerFooterTitle.classList.add('offer-footer-title');
  offerFooter.append(offerFooterTitle);
  offerFooterTitle.innerHTML =
    'Sip, Savor, Smile.<br> <span class="text-accent">It’s coffee time!</span>';

  createSocials(offerFooter);
}
