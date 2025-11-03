import './about.css';
import createGallery from './gallery/gallery';

export default function createAboutSection(parent: HTMLElement) {
  const sectionAbout = document.createElement('section');
  sectionAbout.classList.add('about');
  parent.append(sectionAbout);
  sectionAbout.id = 'about';

  const containerSection = document.createElement('section');
  containerSection.classList.add('container-section');
  sectionAbout.append(containerSection);

  const sectionTitle = document.createElement('h2');
  sectionTitle.classList.add('heading-2');
  sectionTitle.classList.add('text-dark');
  sectionTitle.classList.add('about-title');
  containerSection.append(sectionTitle);
  sectionTitle.innerHTML =
    'Resource is  <span class="text-accent">the perfect and cozy place</span> where you can enjoy a variety of hot beverages, relax, catch up with friends, or get some work done.';

  createGallery(containerSection);
}
