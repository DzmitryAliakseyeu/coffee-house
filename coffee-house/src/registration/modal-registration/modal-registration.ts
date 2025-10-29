import { hideErrorText, showErrorText } from '../../error/error';
import { hideLoader, showLoader } from '../../loader/loader';
import singInUserRequest from '../../requests/posrSignIn';
import registerUserRequest from '../../requests/postRegistration';
import { userAddress, userSignIn } from '../../user-data/user-data';

import './modal-registration.css';

export default async function createModalRegistration() {
  const modal = document.createElement('div');
  modal.classList.add('modal-registration');
  document.body.append(modal);

  document.body.classList.add('no-scroll');

  hideErrorText('.modal-registration');

  showLoader('.modal-registration');

  modal.addEventListener('click', (e) => {
    const overlay = modal.querySelector('.overlay') as HTMLElement;
    const target = e.target as HTMLElement;

    if (!overlay.contains(target)) {
      document.body.classList.remove('no-scroll');
      modal.remove();
    }
  });

  try {
    let response = await registerUserRequest();

    if (response) {
      userSignIn.login = userAddress.login;
      userSignIn.password = userAddress.password;
      localStorage.setItem('signInUser', JSON.stringify(userSignIn));
      let responseSignIn = await singInUserRequest();
      if (responseSignIn) {
        setTimeout(() => hideLoader('.menu-registration'), 1000);
        window.open('/coffee-house/pages/menu.html', '_self');
        localStorage.setItem('logedUser', JSON.stringify(userAddress));
        localStorage.setItem('token', responseSignIn.data.access_token)
      }
    }

    modal.addEventListener('click', (e) => {
      const modalCard = modal.querySelector('.modal-card') as HTMLElement;
      const target = e.target as HTMLElement;

      if (!modalCard.contains(target)) {
        modal.remove();
      }
    });
  } catch {
    hideLoader('.modal-registration');
    showErrorText('.modal-registration');
  }
}
