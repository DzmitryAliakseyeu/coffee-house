export default function validatePromoCode(
  input: HTMLInputElement,
  errorEl: HTMLElement,
) {
  const value = input.value.trim();

  if (value !== 'RS2025' && value.length > 0) {
    errorEl.textContent = "Promo code doesn't exist";
    return false;
  }

  return true;
}
