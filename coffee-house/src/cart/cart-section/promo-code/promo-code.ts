import applyPromoCode from '../../../actions/cart/apply-promo-code';
import createButton from '../../../button/button';
import createInputBlock from '../../../input/input-block';
import './promo-code.css';

export default function createPromoCodeBlock(parent: HTMLElement) {
  const promoCodeBlock = document.createElement('div');
  promoCodeBlock?.classList.add('promo-code');
  parent.append(promoCodeBlock);

  createInputBlock(
    promoCodeBlock,
    'promo-code-input',
    'Promo Code',
    'text',
    'Our promo code RS2025',
  );

  createButton({
    parent: promoCodeBlock,
    className: 'apply-promo-code',
    action: () => applyPromoCode(promoCodeBlock),
    text: 'Apply',
    hasIcon: false,
    isHtml: false,
  });

  const promoText = document.createElement('p');
  promoText.classList.add('promo-text');
  promoText.classList.add('text-dark');
  promoText.classList.add('medium');
  promoCodeBlock.append(promoText);
  promoText.textContent = '*Apply RS2025 promo code to get 20% sale';

  const buttonApplyPromoCode = document.querySelector(
    '.button-apply-promo-code',
  ) as HTMLButtonElement;

  buttonApplyPromoCode.disabled = true;
}
