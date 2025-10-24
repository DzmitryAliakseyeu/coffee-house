export default function createDropdownInput(parent: HTMLElement, className: string, labelName: string, placeholder: string, options: string[]) {

  const inputBlock = document.createElement('div');
  inputBlock.classList.add('input-block', `input-block-${className}`);
  parent.append(inputBlock);

  const label = document.createElement('label');
  label.classList.add('label', 'medium');
  label.setAttribute('for', className);
  label.textContent = labelName;
  inputBlock.append(label);

     const select = document.createElement('select');
    select.id = className;
    select.classList.add('input-field', 'medium');

    if (placeholder) {
      const placeholderOption = document.createElement('option');
      placeholderOption.value = '';
      placeholderOption.textContent = placeholder;
      placeholderOption.disabled = true;
      placeholderOption.selected = true;
      select.append(placeholderOption);
    }

    options.forEach(optionText => {
      const option = document.createElement('option');
      option.value = optionText;
      option.textContent = optionText;
      select.append(option);
    });

    inputBlock.append(select);
}
