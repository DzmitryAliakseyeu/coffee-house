export default function validateCardholderName(
  input: HTMLInputElement,
  errorEl: HTMLElement,
) {
  const value = input.value.trim();

  if (!value) {
    errorEl.textContent = 'Cardholder name is required';
    return false;
  }

  if (!/^[A-Za-z\s]+$/.test(value)) {
    errorEl.textContent = 'Name can contain only letters and spaces';
    return false;
  }

  const parts = value.split(/\s+/);
  if (parts.length < 2) {
    errorEl.textContent = 'Enter both first and last name';
    return false;
  }

  if (parts.some((p) => p.length < 2)) {
    errorEl.textContent = 'Each name part must be at least 2 letters';
    return false;
  }

  if (value.length > 50) {
    errorEl.textContent = 'Name is too long';
    return false;
  }

  errorEl.textContent = '';
  return true;
}
