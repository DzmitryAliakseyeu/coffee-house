import createButton from '../../button/button';
import createInputsContainer from '../../registration/registration-section/inputs-container/inputs-container';

import './registration-section.css'


export default function createRegistrationSection(parent: HTMLElement){
    const sectionRegistration = document.createElement('section');
      sectionRegistration.classList.add('registration');
      parent.append(sectionRegistration);
    
      const containerSection = document.createElement('section');
      containerSection.classList.add('container-section');
      sectionRegistration.append(containerSection);

      const sectionTitle = document.createElement('h2');
      sectionTitle.classList.add('Registration-title');
      sectionTitle.classList.add('heading-2');
      sectionTitle.classList.add('text-dark');
      sectionTitle.textContent = 'Registration';
      containerSection.append(sectionTitle);

      createInputsContainer(containerSection);

    createButton({
        parent: containerSection,
        className: 'registration-request',
        action: () => {
          
        },
        text: 'Registration',
        hasIcon: false,
      });

}