import createCardForm from './card-form/card-form';
import './card-info.css';

export default function createCardInfo(parent: HTMLElement) {
  const cardBlock = document.createElement('div');
  cardBlock.classList.add('card-block');
  parent.append(cardBlock);

  const cardTitle = document.createElement('h3');
  cardTitle.classList.add('card-title');
  cardTitle.classList.add('heading-3');
  cardTitle.classList.add('text-dark');
  cardBlock.append(cardTitle);
  cardTitle.textContent = 'Payment data';

  const cardInfoBlock = document.createElement('div');
  cardInfoBlock.classList.add('card-info-block');
  cardBlock.append(cardInfoBlock);

  const cardImageBlock = document.createElement('div');
  cardImageBlock.classList.add('card-image-block');
  cardInfoBlock.append(cardImageBlock);

  createCardForm(cardInfoBlock);
}
