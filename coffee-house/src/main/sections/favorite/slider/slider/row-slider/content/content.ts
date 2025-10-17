import { SliderDataI } from '../../../../../../../interfaces/interfaces';
import './content.css';

export default function createContent(parent: HTMLElement, slide: SliderDataI) {
  const content = document.createElement('div');
  content.classList.add('content');
  parent.append(content);

  const imageBox = document.createElement('div');
  imageBox.classList.add('image-box');
  content.append(imageBox);

  const image = document.createElement('img');
  image.classList.add('image');
  imageBox.append(image);

  image.src = slide.srcImg;

  const sliderInfo = document.createElement('div');
  sliderInfo.classList.add('slider-info');
  content.append(sliderInfo);

  const slideTitle = document.createElement('h3');
  slideTitle.classList.add('heading-3');
  slideTitle.classList.add('text-dark');
  slideTitle.classList.add('slide-title');
  slideTitle.textContent = slide.slideTitle;
  sliderInfo.append(slideTitle);

  const slideDescription = document.createElement('p');
  slideDescription.classList.add('medium');
  slideDescription.classList.add('text-dark');
  slideDescription.classList.add('slide-description');
  slideDescription.textContent = slide.description;
  sliderInfo.append(slideDescription);

  const slidePrice = document.createElement('h3');
  slidePrice.classList.add('heading-3');
  slidePrice.classList.add('text-dark');
  slidePrice.classList.add('slide-price');
  slidePrice.textContent = slide.price;
  sliderInfo.append(slidePrice);
}
