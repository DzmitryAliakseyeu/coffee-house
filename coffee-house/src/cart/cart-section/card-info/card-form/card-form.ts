import createInputBlock from '../../../../input/input-block';
import './card-form.css';

export default function createCardForm(parent: HTMLElement) {
  const cardForm = document.createElement('div');
  cardForm.classList.add('card-form');
  cardForm.id = 'payment-data';
  parent.append(cardForm);

  createInputBlock(
    cardForm,
    'cardholder-name',
    'Cardholder name:',
    'text',
    'Cardholder name',
  );
  createInputBlock(
    cardForm,
    'card-number',
    'Card number:',
    'text',
    'Card number',
  );
  createInputBlock(cardForm, 'expires', 'Expires:', 'text', 'Expires');
  createInputBlock(cardForm, 'cvv', 'CVV:', 'text', 'CVV');
}
