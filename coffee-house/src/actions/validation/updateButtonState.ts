import checkAllInputsFilled from './checkAllFormFields';

export default function updateButtonState() {
  const buttonRegistration = document.querySelector(
    '.button-registration-request',
  ) as HTMLButtonElement;
  const buttonSignIn = document.querySelector(
    '.button-sign-in-request',
  ) as HTMLButtonElement;

  // const buttonApplyPromoCode = document.querySelector(
  //   '.button-apply-promo-code',
  // ) as HTMLButtonElement;

  // const buttonCancel = document.querySelector(
  //   '.button-cancel',
  // ) as HTMLButtonElement;

  if (buttonRegistration) {
    buttonRegistration.disabled = !checkAllInputsFilled('registrate');
    return;
  }

  if (buttonSignIn) {
    buttonSignIn.disabled = !checkAllInputsFilled('sign-in');
    return;
  }
}
