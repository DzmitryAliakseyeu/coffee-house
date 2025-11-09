import updateButtonState from '../../../actions/validation/updateButtonState';
import createButton from '../../../button/button';
import { hideErrorText, showErrorText } from '../../../error/error';
import createRadioGroup from '../../../input-radio/input-radio';
import createInputBlock from '../../../input/input-block';
import { hideLoader, showLoader } from '../../../loader/loader';
import getProfile from '../../../requests/getProfile';
import { userDataFromServer } from '../../../user-data/user-data';
import './profile-data.css';

// let updatedUserData = {
//   login: '',
//   city: '',
//   street: '',
//   houseNumber: 0,
//   paymentMethod: '',
// };

export default async function createProfileDataGrid(parent: HTMLElement) {
  const profileDataGrid = document.createElement('div');
  profileDataGrid.classList.add('profile-data-grid');
  parent.append(profileDataGrid);

  let token = localStorage.getItem('token');
  if (!token) return;

  if (token) {
    hideErrorText('.profile');
    showLoader('.profile');
    try {
      let response = await getProfile(token);

      let profileData = response.data;
      console.log(profileData);

      userDataFromServer.login = profileData.login;
      userDataFromServer.address.city = profileData.city;
      userDataFromServer.address.street = profileData.street;
      userDataFromServer.address.houseNumber = profileData.houseNumber;
      userDataFromServer.paymentMethod = profileData.paymentMethod;

      setTimeout(() => hideLoader('.profile'), 1000);

      for (let i = 0; i < 4; i += 1) {
        const editBlock = document.createElement('div');
        editBlock.classList.add('edit-block');
        profileDataGrid.append(editBlock);

        switch (i) {
          case 0:
            createInputBlock(
              editBlock,
              'login',
              'Login',
              'text',
              'Placeholder',
              profileData.login,
            );

            break;

          case 1:
            createInputBlock(
              editBlock,
              'city',
              'City',
              'text',
              'Placeholder',
              profileData.city,
            );
            break;

          case 2:
            createInputBlock(
              editBlock,
              'street',
              'Street',
              'text',
              'Placeholder',
              profileData.street,
            );
            break;

          case 3:
            createInputBlock(
              editBlock,
              'house-number',
              'House number',
              'text',
              'Placeholder',
              profileData.houseNumber,
            );
            break;

          default:
            break;
        }
        createButton({
          parent: editBlock,
          className: 'edit',
          action: () => {
            const input = editBlock.querySelector(
              'input',
            ) as HTMLInputElement | null;
            if (input) {
              input.disabled = !input.disabled;

              updateButtonState();
            }
          },

          text: '',
          hasIcon: true,
          isHtml: false,
        });
      }

      createRadioGroup(profileDataGrid, 'pay-by', 'Pay by', [
        { value: 'Cash', text: 'Cash' },
        { value: 'Card', text: 'Card' },
      ]);
    } catch {
      hideLoader('.profile');
      showErrorText('.profile');
    }
  }
}
