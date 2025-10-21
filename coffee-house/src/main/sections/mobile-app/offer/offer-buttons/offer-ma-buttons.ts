import './offer-ma-buttons.css';
import createButton from '../../../../../button/button';

export default function createOfferMAButtons(parent: HTMLElement) {
  const offerMAButtons = document.createElement('div');
  offerMAButtons.classList.add('offer-ma-buttons');
  parent.append(offerMAButtons);

  createButton({
    parent: offerMAButtons,
    className: 'offer-ma-app-store',
    action: () => console.log('click'),
    text: '<span class="caption text-dark">Available on the</span><span class="link-and-button text-dark">App Store</span>',
    hasIcon: true,
    isHtml: true,
  });

  createButton({
    parent: offerMAButtons,
    className: 'offer-ma-google-play',
    action: () => console.log('click'),
    text: '<span class="caption text-dark">Available on</span><span class="link-and-button text-dark">Google Play</span>',
    hasIcon: true,
    isHtml: true,
  });
}
