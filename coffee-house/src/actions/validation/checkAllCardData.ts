export default function checkAllCardInputs() {
  const cardDatainLS = JSON.parse(localStorage.getItem('cardData') || '[]');
  const confirmButton = document.querySelector(
    '.button-confirm',
  ) as HTMLButtonElement;

  if (
    cardDatainLS.cardholderName !== '' &&
    cardDatainLS.cardNumber !== '' &&
    cardDatainLS.expires !== '' &&
    cardDatainLS.cvv !== ''
  ) {
    confirmButton.removeAttribute('disabled');
  } else {
    confirmButton.setAttribute('disabled', '');
  }
}
