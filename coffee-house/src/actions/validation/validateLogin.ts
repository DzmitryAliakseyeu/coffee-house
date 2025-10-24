export default function validateLogin(input: HTMLInputElement, errorEl: HTMLElement){
    let value = input.value;

  if (!/^[A-Za-z]*$/.test(value)) {
    errorEl.textContent = "Only English letters allowed.";
    return false;
  }

  if (value.length > 0 && value.length < 3) {
    errorEl.textContent = "Must be at least 3 characters long.";
    return false;
  }

  if (value.length > 0 && !/^[A-Za-z]/.test(value[0])) {
    errorEl.textContent = "Must start with a letter.";
    return false;
  }

  return true;
}