import validateLogin from '../actions/validation/validateLogin';
import validatePassword from '../actions/validation/validatePassword';
import './input-block.css'

export default function createInputBlock(parent: HTMLElement, className: string, labelName: string, type: string, placeholder: string){
    const inputBlock = document.createElement('div');
    inputBlock.classList.add('input-block');
    inputBlock.classList.add(`input-block-${className}`);
    parent.append(inputBlock);

      const label = document.createElement('label');
    label.classList.add('label');
        label.classList.add('medium')
    inputBlock.append(label);
    label.setAttribute('for', className)
    label.textContent = labelName;
   
    const input = document.createElement('input');
    input.classList.add('input-field');
    input.classList.add('medium')
    input.id = className
    inputBlock.append(input);

     const inputError = document.createElement('p');
    inputError.classList.add('input-error');
    inputBlock.append(inputError);
    input.type = type;
    input.placeholder = placeholder;

      input.addEventListener('blur', () => {
        let isValid: boolean = true
        if(labelName === 'Login'){
            isValid = validateLogin(input, inputError);
        } else if (labelName === 'Password'){
            isValid = validatePassword(input, inputError);
        }
  
    if (!isValid) {
      input.classList.add('invalid');
      inputError.style.color = 'red'
    } else {
      input.classList.remove('invalid');
        inputError.style.color = 'transparent'
    }
  });

  input.addEventListener('focus', () => {
    input.classList.remove('invalid');
    inputError.style.color = 'transparent'
  
  });

}