import './button.css';

export default function createButton(
  parent,
  className,
  action,
  text,
  hasIcon = false,
) {
  const button = document.createElement('button');
  button.classList.add('button');
  button.classList.add('link-and-button');
  button.classList.add('text-dark');
  button.classList.add(`button-${className}`);
  parent.append(button);

  button.addEventListener('click', action);
  const buttonText = document.createElement('span');
  buttonText.classList.add(`button-${className}-text`);
  buttonText.textContent = text;
  button.append(buttonText);

  if (hasIcon) {
    const buttonIcon = document.createElement('span');
    buttonIcon.classList.add(`button-${className}-icon`);
    button.append(buttonIcon);
  }
}
