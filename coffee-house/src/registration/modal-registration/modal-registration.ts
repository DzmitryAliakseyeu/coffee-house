

import { hideErrorText, showErrorText } from '../../error/error';
import { hideLoader, showLoader } from '../../loader/loader';
import registerUserRequest from '../../requests/postRegistration';

import './modal-registration.css'


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
            
                if(response){
                    setTimeout(() => hideLoader('.menu-registration'), 1000);
                    window.open('/pages/menu.html', '_self')
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
