import cancelUpdatingUserData from '../../../actions/profile/cancelUpdatingUserData';
import logOut from '../../../actions/profile/logOut';
import saveUpdatedUserData from '../../../actions/profile/saveUpdatedData';
import createButton from '../../../button/button';
import './profile-buttons.css';

export default function createProfileButtons(parent: HTMLElement) {
  const profileButtonsBlock = document.createElement('div');
  profileButtonsBlock.classList.add('profile-buttons-block');
  parent.append(profileButtonsBlock);

  let token = localStorage.getItem('token');

  if (!token) {
    createButton({
      parent: profileButtonsBlock,
      className: 'sign-in',
      action: () => {
        window.open('/coffee-house/pages/sign-in.html', '_self');
      },
      text: 'Sign In',
      hasIcon: false,
      isHtml: false,
    });

    createButton({
      parent: profileButtonsBlock,
      className: 'registration',
      action: () => {
        window.open('/coffee-house/pages/registration.html', '_self');
      },
      text: 'Registration',
      hasIcon: false,
      isHtml: false,
    });
  } else {
    //Button Save used for imitation sending request to update user data in server
    createButton({
      parent: profileButtonsBlock,
      className: 'save',
      action: () => saveUpdatedUserData(),
      text: 'Save',
      hasIcon: false,
      isHtml: false,
    });

    createButton({
      parent: profileButtonsBlock,
      className: 'cancel',
      action: () => cancelUpdatingUserData(),
      text: 'Cancel',
      hasIcon: false,
      isHtml: false,
    });
    createButton({
      parent: profileButtonsBlock,
      className: 'log-out',
      action: () => logOut(),
      text: 'Log out',
      hasIcon: false,
      isHtml: false,
    });
  }
}
