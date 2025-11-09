export default function validateCardNumber(
  input: HTMLInputElement,
  errorEl: HTMLElement,
) {
  const value = input.value.replace(/\s+/g, '');

  if (!value) {
    errorEl.textContent = 'Card number is required';
    return false;
  }

  if (!/^\d+$/.test(value)) {
    errorEl.textContent = 'Card number can contain only digits';
    return false;
  }

  if (value.length < 16 || value.length > 16) {
    errorEl.textContent = 'Card number must be 16 digits';
    return false;
  }

  errorEl.textContent = '';
  return true;
}
