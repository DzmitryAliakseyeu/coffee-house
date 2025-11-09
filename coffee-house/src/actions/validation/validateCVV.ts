export default function validateCVV(
  input: HTMLInputElement,
  errorEl: HTMLElement,
) {
  const value = input.value.trim();

  if (!value) {
    errorEl.textContent = 'CVV is required';
    return false;
  }

  if (!/^\d+$/.test(value)) {
    errorEl.textContent = 'CVV must contain only digits';
    return false;
  }

  if (value.length !== 3) {
    errorEl.textContent = 'CVV must be 3 digits';
    return false;
  }

  errorEl.textContent = '';
  return true;
}
