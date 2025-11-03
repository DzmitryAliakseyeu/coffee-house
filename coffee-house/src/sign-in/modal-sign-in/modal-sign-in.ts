import { hideErrorText, showErrorText } from '../../error/error';
import { hideLoader, showLoader } from '../../loader/loader';
import singInUserRequest from '../../requests/posrSignIn';
import { userSignIn } from '../../user-data/user-data';

import './modal-sign-in.css';

export default async function createModalSignIn() {
  const modal = document.createElement('div');
  modal.classList.add('modal-sign-in');
  document.body.append(modal);

  document.body.classList.add('no-scroll');

  hideErrorText('.modal-sign-in');

  showLoader('.modal-sign-in');

  modal.addEventListener('click', (e) => {
    const overlay = modal.querySelector('.overlay') as HTMLElement;
    const target = e.target as HTMLElement;

    if (!overlay.contains(target)) {
      document.body.classList.remove('no-scroll');
      modal.remove();
    }
  });

  try {
    let response = await singInUserRequest();

    localStorage.setItem('token', response.data.access_token);

    if (response) {
      setTimeout(() => hideLoader('.modal-sign-in'), 1000);
      window.open('/coffee-house/pages/menu.html', '_self');
      localStorage.setItem('signInUser', JSON.stringify(userSignIn));
    }

    modal.addEventListener('click', (e) => {
      const modalCard = modal.querySelector('.modal-card') as HTMLElement;
      const target = e.target as HTMLElement;

      if (!modalCard.contains(target)) {
        modal.remove();
      }
    });
  } catch {
    hideLoader('.modal-sign-in');
    showErrorText('.modal-sign-in');
  }
}
