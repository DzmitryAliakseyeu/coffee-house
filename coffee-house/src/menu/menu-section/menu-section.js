import createMenuOfferContainer from './menu-container/menu-container';

export default function createMenuSection(parent) {
  const sectionMenu = document.createElement('section');
  sectionMenu.classList.add('menu');
  parent.append(sectionMenu);

  const containerSection = document.createElement('section');
  containerSection.classList.add('container-section');
  sectionMenu.append(containerSection);

  createMenuOfferContainer(containerSection);

  //   const sectionTitle = document.createElement('h2');
  //   sectionTitle.classList.add('heading-2');
  //   sectionTitle.classList.add('text-dark');
  //   sectionTitle.classList.add('favorite-title');
  //   containerSection.append(sectionTitle);
  //   sectionTitle.innerHTML =
  //     'Choose your <span class="text-accent">favorite</span> coffee';

  //   createSliderContainer(containerSection);
}
