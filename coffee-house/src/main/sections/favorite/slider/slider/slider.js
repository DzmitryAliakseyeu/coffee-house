import movementSliderToLeft from '../../../../../actions/slider/movementSliderToLeft';
import movementSliderToRight from '../../../../../actions/slider/movementSliderToRight';

import createButton from '../../../../../button/button';
import './slider.css';
import createSliderTrack from './sliderTrack/sliderTrack';

export default function createSlider(parent) {
  let index = 0;
  const slider = document.createElement('div');
  slider.classList.add('slider');
  parent.append(slider);

  createButton(
    slider,
    'slider-left',
    () => {
      return (index = movementSliderToLeft(index));
    },
    '',
    true,
  );
  createSliderTrack(slider);
  createButton(
    slider,
    'slider-right',
    () => {
      return (index = movementSliderToRight(index));
    },
    '',
    true,
  );

  const animation = () => {
    return setInterval(() => {
      index = movementSliderToRight(index);
    }, 5000); // better use ~2s instead of 700ms
  };

  const intervalId = animation();
}
