import { ButtonI } from '../interfaces/interfaces';
import './button.css';

export default function createButton({
  parent,
  className,
  action,
  text,
  hasIcon = false,
  isHtml = false,
}: ButtonI) {
  const button = document.createElement('button');
  button.classList.add('button');
  button.classList.add('link-and-button');
  button.classList.add('text-dark');
  button.classList.add(`button-${className}`);
  parent.append(button);

  button.addEventListener('click', action);
  const buttonText = document.createElement('span');
  buttonText.classList.add(`button-${className}-text`);
  if (isHtml) {
    buttonText.innerHTML = text;
  } else {
    buttonText.textContent = text;
  }
  button.append(buttonText);

  if (hasIcon) {
    const buttonIcon = document.createElement('span');
    buttonIcon.classList.add(`button-${className}-icon`);
    button.append(buttonIcon);
  }
}
