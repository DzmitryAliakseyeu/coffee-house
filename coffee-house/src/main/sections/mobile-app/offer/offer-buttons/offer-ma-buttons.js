import './offer-ma-buttons.css';
import createButton from '../../../../../button/button';

export default function createOfferMAButtons(parent) {
  const offerMAButtons = document.createElement('div');
  offerMAButtons.classList.add('offer-ma-buttons');
  parent.append(offerMAButtons);

  createButton(
    offerMAButtons,
    'offer-ma-app-store',
    () => console.log('click'),
    '<span class="caption text-dark">Available on the</span><br><span class="link-and-button text-dark">App Store</span>',
    true,
    true,
  );

  createButton(
    offerMAButtons,
    'offer-ma-google-play',
    () => console.log('click'),
    '<span class="caption text-dark">Available on</span><br><span class="link-and-button text-dark">Google Play</span>',
    true,
    true,
  );
}
