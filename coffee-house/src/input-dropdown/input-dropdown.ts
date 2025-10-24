import { addressData } from '../data/address-data';
import { userAddress } from '../user-data/user-data';
import './input-dropdown.css'

export default function createDropdownInput(parent: HTMLElement, className: string, labelName: string, placeholder: string, options: string[]) {

 const wrapper = document.createElement('div');
  wrapper.classList.add('input-block', `input-block-${className}`);
  parent.append(wrapper);

  const label = document.createElement('label');
  label.classList.add('label', 'medium');
  label.setAttribute('for', className);
  label.textContent = labelName;
  wrapper.append(label);

  const input = document.createElement('input');
  input.type = 'text';
  input.id = className;
  input.classList.add('input-field', 'medium');
  input.placeholder = placeholder;
  wrapper.append(input);

  const dropdown = document.createElement('div');
  dropdown.classList.add('dropdown-list');
  wrapper.append(dropdown);

  function populateDropdown(optionsToShow: string[], filter = '') {
    dropdown.innerHTML = '';
    optionsToShow
      .filter(opt => opt.toLowerCase().includes(filter.toLowerCase()))
      .forEach(opt => {
        const item = document.createElement('div');
        item.classList.add('dropdown-item');
        item.textContent = opt;

        item.addEventListener('click', () => {
          input.value = opt;
          dropdown.classList.remove('show-list');
          if(labelName.toLowerCase() === 'city'){
            userAddress.address.city = input.value;
             userAddress.address.street = '';
             const streetsInput = document.getElementById('street') as HTMLInputElement;
             streetsInput.value = '';
          }

           if(labelName.toLowerCase() === 'street'){
            userAddress.address.street = input.value;
          }

          console.log(userAddress)

        });

        dropdown.append(item);
      });
  }

 input.addEventListener('focus', () => {
  if (labelName.toLowerCase() === 'city') {
    populateDropdown(addressData.map(obj => obj.city));
  } else if (labelName.toLowerCase() === 'street') {
    const cityObj = addressData.find(c => c.city === userAddress.address.city);
    populateDropdown(cityObj ? cityObj.streets : []);
  }

  dropdown.classList.add('show-list');
});


 input.addEventListener('input', () => {
  if (labelName.toLowerCase() === 'city') {
    populateDropdown(addressData.map(c => c.city), input.value);
     userAddress.address.street = '';
             const streetsInput = document.getElementById('street') as HTMLInputElement;
             streetsInput.value = '';
  } else if (labelName.toLowerCase() === 'street') {
    const cityObj = addressData.find(c => c.city === userAddress.address.city);
    populateDropdown(cityObj ? cityObj.streets : [], input.value);
  }

  dropdown.classList.add('show-list');
});


  input.addEventListener('blur', () => {
    setTimeout(() => (dropdown.classList.remove('show-list')), 150); 
  });

  return input;
}
