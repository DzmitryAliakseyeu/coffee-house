import updateButtonState from '../actions/validation/updateButtonState';
import { userAddress } from '../user-data/user-data';
import './input-radio.css'

export default function createRadioGroup(parent: HTMLElement, className: string, labelName: string, options: { value: string; text: string }[]){
 const radioBlock = document.createElement('div');
  radioBlock.classList.add('input-radio');
   radioBlock.classList.add(`input-radio-${className}`);
  parent.append(radioBlock);


    const groupLabel = document.createElement('label');
  groupLabel.classList.add('label');
    groupLabel.classList.add('medium');
  groupLabel.textContent = labelName;
  radioBlock.append(groupLabel);

   const radiosContainer = document.createElement('div');
  radiosContainer.classList.add('radio-container');
  radioBlock.append(radiosContainer);

  options.forEach((option, i) => {
    const optionWrapper = document.createElement('label');
  optionWrapper.classList.add('radio-option');


  const radio = document.createElement('input');
  radio.type = 'radio';
  radio.name = className;
  radio.value = option.value;

    if(i == 0){
   radio.checked = true;
    userAddress.paymentMethod = option.value.toLowerCase();
      updateButtonState()
     radio.dispatchEvent(new Event('change', { bubbles: true }));
   
    console.log(userAddress.paymentMethod)
  }

 
  const customCircle = document.createElement('span');
  customCircle.classList.add('custom-radio');



  const text = document.createElement('span');
  text.classList.add('radio-text');
    text.classList.add('medium');
  text.textContent = option.text;

  optionWrapper.append(radio, customCircle, text);
  radiosContainer.append(optionWrapper);

  radio.addEventListener('change', () => {
      if (radio.checked) {
        userAddress.paymentMethod = radio.value.toLowerCase();
          updateButtonState()
      }
    });
  });

 


}