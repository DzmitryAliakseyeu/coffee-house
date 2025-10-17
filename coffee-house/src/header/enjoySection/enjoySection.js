import createButton from '../../button/button';
import './enjoySection.css';

export default function createEnjoySection(parent) {
  const containerSection = document.createElement('section');
  containerSection.classList.add('container-section');
  parent.append(containerSection);

  const video = document.createElement('video');
  video.classList.add('video');
  containerSection.append(video);
  video.src = './video/coffee-house-video.mp4';
  video.autoplay = true;
  video.muted = true;
  video.loop = true;

  const offer = document.createElement('div');
  offer.classList.add('offer');
  containerSection.append(offer);

  const offerTitle = document.createElement('h1');
  offerTitle.classList.add('text-light');
  offerTitle.classList.add('heading-1');
  offerTitle.classList.add('offer-title');
  offer.append(offerTitle);
  offerTitle.innerHTML =
    '<span class="text-accent">Enjoy</span> premium coffee at our charming cafe';

  const offerText = document.createElement('p');
  offerText.classList.add('offer-text');
  offerText.classList.add('text-light');
  offerText.classList.add('medium');
  offer.append(offerText);
  offerText.textContent =
    'With its inviting atmosphere and delicious coffee options, the Coffee House Resource is a popular destination for coffee lovers and those seeking a warm and inviting space to enjoy their favorite beverage.';

  // createButton(offer, 'offer', () => console.log('click'), 'Menu');

  createButton(
    offer,
    'offer',
    () => {
      window.open('./pages/menu.html', '_self');
    },
    'Menu',
    true,
  );
}
