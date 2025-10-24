export default function validateHouseNumber(input: HTMLInputElement, errorEl: HTMLElement){
  const value = input.value.trim();

  const number = Number(value);

  if (isNaN(number)) {
    errorEl.textContent = "Must be a number.";
    return false;
  }

   if (number <= 1) {
    errorEl.textContent = "House number must be greater than 1.";
    return false;
  }

  return true;
}