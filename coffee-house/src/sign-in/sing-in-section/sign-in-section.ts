import createButton from '../../button/button';
import createInputsContainer from './inputs-container/inputs-container';
import './sign-in-section.css'


export default function createSignSection(parent: HTMLElement){
    const sectionSignIn = document.createElement('section');
      sectionSignIn.classList.add('sign-in');
      parent.append(sectionSignIn);
    
      const containerSection = document.createElement('section');
      containerSection.classList.add('container-section');
      sectionSignIn.append(containerSection);

      const sectionTitle = document.createElement('h2');
      sectionTitle.classList.add('cart-title');
      sectionTitle.classList.add('heading-2');
      sectionTitle.classList.add('text-dark');
      sectionTitle.textContent = 'Sign In';
      containerSection.append(sectionTitle);

      createInputsContainer(containerSection);

    createButton({
        parent: containerSection,
        className: 'sign-in-request',
        action: () => {
          
        },
        text: 'Sign In',
        hasIcon: false,
      });

}