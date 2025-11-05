import cancelUpdatingUserData from '../../../actions/profile/cancelUpdatingUserData';
import saveUpdatedUserData from '../../../actions/profile/saveUpdatedData';
import createButton from '../../../button/button';
import './profile-buttons.css';

export default function createProfileButtons(parent: HTMLElement) {
  const profileButtonsBlock = document.createElement('div');
  profileButtonsBlock.classList.add('profile-buttons-block');
  parent.append(profileButtonsBlock);

  //Button Save used for imitation sening request to update user data in server
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
    action: () => console.log('click'),
    text: 'Log out',
    hasIcon: false,
    isHtml: false,
  });
}
