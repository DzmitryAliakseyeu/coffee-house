import updateButtonState from '../actions/validation/updateButtonState';
import { addressData } from '../data/address-data';
import { userAddress } from '../user-data/user-data';
import './input-dropdown.css';

export default function createDropdownInput(
  parent: HTMLElement,
  className: string,
  labelName: string,
  placeholder: string,
) {
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
  input.setAttribute('autocomplete', "o")
  input.classList.add('input-field', 'medium');
  input.placeholder = placeholder;
  wrapper.append(input);

  const dropdown = document.createElement('div');
  dropdown.classList.add('dropdown-list');
  wrapper.append(dropdown);

     const streetsInput = document.getElementById(
        'street',
      ) as HTMLInputElement;
      if(streetsInput)
      streetsInput.disabled = true;

  function populateDropdown(optionsToShow: string[], filter = '') {
    dropdown.innerHTML = '';
    optionsToShow
      .filter((opt) => opt.toLowerCase().includes(filter.toLowerCase()))
      .forEach((opt) => {
        const item = document.createElement('div');
        item.classList.add('dropdown-item');
        item.textContent = opt;

        item.addEventListener('click', () => {
          input.value = opt;
          dropdown.classList.remove('show-list');
          if (labelName.toLowerCase() === 'city') {
            userAddress.address.city = input.value;
            userAddress.address.street = '';
            const streetsInput = document.getElementById(
              'street',
            ) as HTMLInputElement;
            streetsInput.value = '';
            console.log(userAddress.address)
            if(userAddress.address.city){
              streetsInput.removeAttribute('disabled')
              input.classList.remove('invalid');
              input.classList.add('valid');
            }
          }

          if (labelName.toLowerCase() === 'street') {
          
            userAddress.address.street = input.value;
               if(userAddress.address.street){
              input.classList.remove('invalid');
              input.classList.add('valid');
            }
          }
        });

        dropdown.append(item);
      });
  }

  input.addEventListener('focus', () => {
    input.classList.remove('invalid')
      input.classList.remove('valid')
    if (labelName.toLowerCase() === 'city') {
      populateDropdown(addressData.map((obj) => obj.city));
    } else if (labelName.toLowerCase() === 'street') {
      const cityObj = addressData.find(
        (c) => c.city === userAddress.address.city,
      );
      populateDropdown(cityObj ? cityObj.streets : []);
    }

    dropdown.classList.add('show-list');
  });

  input.addEventListener('input', () => {
    console.log('input')
    if (labelName.toLowerCase() === 'city') {
      populateDropdown(
        addressData.map((c) => c.city),
        input.value,
      );

      let existCity = addressData.find((c) => input.value === c.city);
      console.log(existCity)
         const streetsInput = document.getElementById(
          'street') as HTMLInputElement;

          streetsInput.classList.remove('valid')
      if(!existCity || !input.value.trim()){
          userAddress.address.city = ''
          streetsInput.value = '';
          streetsInput.disabled = true;
          input.classList.add('invalid');
          input.classList.remove('valid');
      } else {
           userAddress.address.city = input.value;
          streetsInput.removeAttribute('disabled')
          input.classList.remove('invalid');
          input.classList.add('valid');
      }

      userAddress.address.street = '';
      streetsInput.value = '';
    } else if (labelName.toLowerCase() === 'street') {
    
      const cityObj = addressData.find(
        (c) => c.city === userAddress.address.city,
      );

      console.log(cityObj)
         let existStreet = cityObj?.streets.find((s) => input.value === s);
      console.log(existStreet)
      if(!existStreet || !input.value.trim()){
          userAddress.address.street = '';
          input.classList.add('invalid');
          input.classList.remove('valid');
          console.log('no exist')
      } else {
           userAddress.address.street = input.value;
          input.classList.remove('invalid');
          input.classList.add('valid');
      
      }
      populateDropdown(cityObj ? cityObj.streets : [], input.value);
    }
    updateButtonState();
    dropdown.classList.add('show-list');
    return
  });

input.addEventListener('blur', () => {
  console.log(input.value);
  console.log(userAddress.address);

  // Убираем выпадающий список с небольшой задержкой
  setTimeout(() => dropdown.classList.remove('show-list'), 150);

  // Пустое поле — invalid
  if (!input.value.trim()) {
    input.classList.add('invalid');
    input.classList.remove('valid');
    updateButtonState();
    return;
  }

  if (labelName.toLowerCase() === 'city') {
    const cityExists = addressData.some((c) => c.city === input.value);
    if (!cityExists) {
      input.classList.add('invalid');
      input.classList.remove('valid');
      userAddress.address.city = '';
    } else {
      input.classList.add('valid');
      input.classList.remove('invalid');
    }
  }

  if (labelName.toLowerCase() === 'street') {
    const cityObj = addressData.find((c) => c.city === userAddress.address.city);
    const streetExists = cityObj?.streets.includes(input.value);
    if (!streetExists) {
      input.classList.add('invalid');
      input.classList.remove('valid');
      userAddress.address.street = '';
    } else {
      input.classList.add('valid');
      input.classList.remove('invalid');
    }
  }

  updateButtonState();
});

  return input;
}
