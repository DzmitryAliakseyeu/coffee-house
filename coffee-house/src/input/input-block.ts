import updateButtonState from '../actions/validation/updateButtonState';
import validateConfirmPassword from '../actions/validation/validateConfirmPassword';
import validateHouseNumber from '../actions/validation/validateHouseNumber';
import validateLogin from '../actions/validation/validateLogin';
import validatePassword from '../actions/validation/validatePassword';
import { userAddress, userSignIn } from '../user-data/user-data';
import './input-block.css';

export default function createInputBlock(
  parent: HTMLElement,
  className: string,
  labelName: string,
  type: string,
  placeholder: string,
) {
  const inputBlock = document.createElement('div');
  inputBlock.classList.add('input-block');
  inputBlock.classList.add(`input-block-${className}`);
  parent.append(inputBlock);

  const label = document.createElement('label');
  label.classList.add('label');
  label.classList.add('medium');
  inputBlock.append(label);
  label.setAttribute('for', className);
  label.textContent = labelName;

  const input = document.createElement('input');
  input.classList.add('input-field');
  input.classList.add('medium');
  input.id = className;
  inputBlock.append(input);

  if (labelName.toLowerCase() === 'confirm password') {
    input.disabled = true;
  }

  const inputError = document.createElement('p');
  inputError.classList.add('input-error');
  inputBlock.append(inputError);
  input.type = type;
  input.placeholder = placeholder;

  input.addEventListener('blur', () => {
    let isValid: boolean = true;
    if (labelName === 'Login') {
      isValid = validateLogin(input, inputError);
    } else if (labelName === 'Password') {
      isValid = validatePassword(input, inputError);
  
    } else if (labelName.toLocaleLowerCase() === 'confirm password') {
      isValid = validateConfirmPassword(input, inputError);
  
    } else if (labelName.toLocaleLowerCase() === 'house number') {
      isValid = validateHouseNumber(input, inputError);
    }
   

    if (!isValid) {
       input.classList.remove('valid')
      input.classList.add('invalid');
      inputError.style.color = 'red';
    } else if(isValid && input.value){
       
        input.classList.add('valid')
    
      input.classList.remove('invalid');
      inputError.style.color = 'transparent';
      if (labelName === 'Login') {
        userAddress.login = input.value;
        userSignIn.login = input.value;
      }

      if (labelName === 'Password') {
        userAddress.password = input.value;
        userSignIn.password = input.value;
      }

      if (labelName.toLocaleLowerCase() === 'confirm password') {
        userAddress.confirmPassword = input.value;
      }

      if (labelName.toLocaleLowerCase() === 'house number') {
        if(!input.value.trim()){
            userAddress.address.houseNumber = '';
        } else {
          userAddress.address.houseNumber = input.value;
        }
     
      }

   
    } else if (!input.value){
 if (labelName === 'Login') {
        userAddress.login = input.value;
        userSignIn.login = input.value;
      }

      if (labelName === 'Password') {
        userAddress.password = input.value;
        userSignIn.password = input.value;
      }

      if (labelName.toLocaleLowerCase() === 'confirm password') {
        userAddress.confirmPassword = input.value;
      }

      if (labelName.toLocaleLowerCase() === 'house number') {
        userAddress.address.houseNumber = input.value;
      }
    }
       updateButtonState();
       console.log(userAddress)
  });

  input.addEventListener('focus', () => {
    input.classList.remove('invalid');
     input.classList.remove('valid');
    inputError.style.color = 'transparent';
  });
}
