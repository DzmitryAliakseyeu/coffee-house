export default function validatePassword(input: HTMLInputElement, errorEl: HTMLElement){
  const value = input.value.trim();

  if (value.length > 0 && value.length < 6) {
    errorEl.textContent = "Must be at least 6 characters long.";
    return false;
  }

  if (value.length > 0 && !/[!@#$%^&*(),.?":{}|<>_\-+=~`[\]\\;'\/]/.test(value)) {
    errorEl.textContent = "Must contain at least 1 special character.";
    return false;
  }

  const confirmPassword = document.getElementById('confirm-password') as HTMLInputElement;
  if(confirmPassword){
  confirmPassword.disabled = false;
  }

  return true;
}