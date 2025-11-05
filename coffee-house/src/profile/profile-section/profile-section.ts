import updateButtonState from '../../actions/validation/updateButtonState';
import createButton from '../../button/button';
import createInputsContainer from '../../registration/registration-section/inputs-container/inputs-container';
import createProfileButtons from './profile-buttons/profile-buttons';
import createProfileDataGrid from './profile-data/profile-data';

import './profile-section.css';

export default function createProfileSection(parent: HTMLElement) {
  const sectionProfile = document.createElement('section');
  sectionProfile.classList.add('profile');
  parent.append(sectionProfile);

  const containerSection = document.createElement('section');
  containerSection.classList.add('container-section');
  sectionProfile.append(containerSection);

  const sectionTitle = document.createElement('h2');
  sectionTitle.classList.add('profile-title');
  sectionTitle.classList.add('heading-2');
  sectionTitle.classList.add('text-dark');
  sectionTitle.textContent = 'Profile';
  containerSection.append(sectionTitle);

  createProfileDataGrid(containerSection);
  createProfileButtons(containerSection);

  updateButtonState();

  //   createInputsContainer(containerSection);

  //   createButton({
  //     parent: containerSection,
  //     className: 'registration-request',
  //     action: async () => {
  //      console.log('click')
  //     },
  //     text: 'Registration',
  //     hasIcon: false,
  //   });

  //   const buttonRegistartion = document.querySelector(
  //     '.button-registration-request',
  //   ) as HTMLButtonElement;

  //   buttonRegistartion.disabled = true;
}
