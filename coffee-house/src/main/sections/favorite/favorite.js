import './favorite.css';
import '../../../../src/global.css';
import createSliderContainer from './slider/sliderContainer/sliderContainer';

export default function createFavoriteSection(parent) {
  const sectionFavorite = document.createElement('section');
  sectionFavorite.classList.add('favorite');
  parent.append(sectionFavorite);

  const containerSection = document.createElement('section');
  containerSection.classList.add('container-section');
  sectionFavorite.append(containerSection);

  const sectionTitle = document.createElement('h2');
  sectionTitle.classList.add('heading-2');
  sectionTitle.classList.add('text-dark');
  sectionTitle.classList.add('favorite-title');
  containerSection.append(sectionTitle);
  sectionTitle.innerHTML =
    'Choose your <span class="text-accent">favorite</span> coffee';

  createSliderContainer(containerSection);
}
