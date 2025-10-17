
import { sliderData } from '../../../../../../data/slider-data';
import createContent from './content/content';

import './row-slider.css';

export default function createRowSlider(parent: HTMLElement) {
  const rowSlider = document.createElement('div');
  rowSlider.classList.add('row-slider');
  parent.append(rowSlider);

  sliderData.forEach((slide) => {
    createContent(rowSlider, slide);
  });
}
