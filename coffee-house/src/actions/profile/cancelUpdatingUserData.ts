import { updatedUserData, userDataFromServer } from '../../user-data/user-data';

export default function cancelUpdatingUserData() {
  updatedUserData.login = '';
  updatedUserData.paymentMethod = '';
  updatedUserData.address.city = '';
  updatedUserData.address.street = '';
  updatedUserData.address.houseNumber = '';

  const editBlocks = document.querySelectorAll<HTMLDivElement>('.edit-block');

  editBlocks.forEach((block) => {
    const input = block.querySelector('input') as HTMLInputElement | null;
    const method =
      userDataFromServer.paymentMethod[0].toUpperCase() +
      userDataFromServer.paymentMethod.slice(1);
    const selectedCash = document.querySelector(
      `input[value=${method}`,
    ) as HTMLInputElement;
    selectedCash.checked = true;

    if (!input) return;

    // if(selected) updatedUserData.paymentMethod = selected.value.toLocaleLowerCase();

    const id = input.id;

    switch (id) {
      case 'login':
        input.value = userDataFromServer.login;
        break;

      case 'city':
        input.value = userDataFromServer.address.city;
        break;
      case 'street':
        input.value = userDataFromServer.address.street;
        break;
      case 'house-number':
        input.value = userDataFromServer.address.houseNumber;
        break;
      default:
        break;
    }
  });
}
