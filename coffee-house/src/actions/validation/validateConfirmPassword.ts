import { userAddress } from '../../user-data/user-data';

export default function validateConfirmPassword(
  input: HTMLInputElement,
  errorEl: HTMLElement,
) {
  const value = input.value.trim();

  //   const inputPassword = document.getElementById('password') as HTMLInputElement;

  if (value !== userAddress.password) {
    errorEl.textContent = 'Incorrect password';
    return false;
  }

  return true;
}
