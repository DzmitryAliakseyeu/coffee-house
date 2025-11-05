import { updatedUserData } from '../../user-data/user-data';

export default function saveUpdatedUserData() {
  const editBlocks = document.querySelectorAll<HTMLDivElement>('.edit-block');

  editBlocks.forEach((block) => {
    const input = block.querySelector('input') as HTMLInputElement | null;
    const selected = document.querySelector<HTMLInputElement>(
      'input[name="pay-by"]:checked',
    );
    console.log(selected);
    if (!input) return;

    if (selected) updatedUserData.paymentMethod = selected.value.toLowerCase();

    const id = input.id;

    switch (id) {
      case 'login':
        updatedUserData.login = input.value;
        break;

      case 'city':
        updatedUserData.address.city = input.value;
        break;
      case 'street':
        updatedUserData.address.street = input.value;
        break;
      case 'house-number':
        updatedUserData.address.houseNumber = input.value;
        break;
      default:
        break;
    }
  });

  console.log(updatedUserData);
}
