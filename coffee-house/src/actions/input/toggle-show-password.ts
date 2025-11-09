export default function toggleShowPassword(button: HTMLElement) {
  const passwordButtonIcon = button.querySelector(
    '.button-toggle-password-icon',
  ) as HTMLElement;
  passwordButtonIcon.classList.toggle('password-open');

  const inputBlockPassword = button.closest(
    '.input-block-password',
  ) as HTMLElement;
  const inputBlockConfirmPassword = button.closest(
    '.input-block-confirm-password',
  ) as HTMLElement;
  let inputEl = inputBlockPassword ?? inputBlockConfirmPassword;

  const input = inputEl.querySelector('input') as HTMLInputElement;

  input.type === 'password' ? (input.type = 'text') : (input.type = 'password');
}
