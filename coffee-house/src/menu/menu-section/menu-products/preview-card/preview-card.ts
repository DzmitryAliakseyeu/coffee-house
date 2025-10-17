import { PreviewCardI } from '../../../../interfaces/interfaces';
import createModal from '../modal/modal';

import './preview-card.css';

export default function createPreviewCard({
  parent,
  srcImg,
  title,
  description,
  price,
}: PreviewCardI

) {
  const previewCard = document.createElement('li');
  previewCard.classList.add('preview-card');
  parent.append(previewCard);

  previewCard.addEventListener('click', () => createModal(title));

  const screenCardBlock = document.createElement('div');
  screenCardBlock.classList.add('screen-card-block');
  previewCard.append(screenCardBlock);

  const imgCardBlock = document.createElement('img');
  imgCardBlock.classList.add('img-card-block');
  previewCard.append(imgCardBlock);
  imgCardBlock.src = srcImg;

  const contentCardBlock = document.createElement('div');
  contentCardBlock.classList.add('content-card-block');
  previewCard.append(contentCardBlock);

  const textContentCardBlock = document.createElement('div');
  textContentCardBlock.classList.add('text-content-card-block');
  contentCardBlock.append(textContentCardBlock);

  const titleCard = document.createElement('h3');
  titleCard.classList.add('heading-3');
  titleCard.classList.add('text-dark');
  titleCard.classList.add('preview-card-title');
  textContentCardBlock.append(titleCard);
  titleCard.textContent = title;

  const descriptionCard = document.createElement('p');
  descriptionCard.classList.add('medium');
  descriptionCard.classList.add('text-dark');
  descriptionCard.classList.add('preview-card-description');
  textContentCardBlock.append(descriptionCard);
  descriptionCard.textContent = description;

  const priceCard = document.createElement('h3');
  priceCard.classList.add('heading-3');
  priceCard.classList.add('text-dark');
  priceCard.classList.add('preview-card-price');
  contentCardBlock.append(priceCard);
  priceCard.textContent = price;
}
