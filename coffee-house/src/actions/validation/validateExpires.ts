export default function validateExpires(
  input: HTMLInputElement,
  errorEl: HTMLElement,
) {
  const value = input.value.trim();

  const match = value.match(/^(\d{2})[\/\-]?(\d{2,4})$/);

  if (!match) {
    errorEl.textContent = 'Invalid expiry format (MM/YY)';
    return false;
  }

  let [, monthStr, yearStr] = match;
  const month = parseInt(monthStr, 10);
  let year = parseInt(yearStr, 10);

  if (month < 1 || month > 12) {
    errorEl.textContent = 'Invalid month';
    return false;
  }

  if (year < 100) {
    const currentYear = new Date().getFullYear();
    const century = Math.floor(currentYear / 100) * 100;
    year += century;
  }

  const expiryDate = new Date(year, month, 0, 23, 59, 59);
  const now = new Date();

  if (expiryDate < now) {
    errorEl.textContent = 'Card has expired';
    return false;
  }

  errorEl.textContent = '';
  return true;
}
