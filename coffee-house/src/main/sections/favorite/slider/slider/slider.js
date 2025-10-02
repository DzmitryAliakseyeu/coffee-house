import movementSliderToLeft from '../../../../../actions/slider/movementSliderToLeft';
import movementSliderToRight from '../../../../../actions/slider/movementSliderToRight';

import createButton from '../../../../../button/button';
import './slider.css';
import createSliderTrack from './sliderTrack/sliderTrack';

export let indexSlide = 0;

export default function createSlider(parent) {
  let intervalId;

  const slider = document.createElement('div');
  slider.classList.add('slider');
  parent.append(slider);

  createButton(
    slider,
    'slider-left',
    () => {
      indexSlide = movementSliderToLeft(indexSlide);
      resetAnimation();
    },
    '',
    true,
  );
  createSliderTrack(slider);
  createButton(
    slider,
    'slider-right',
    () => {
      indexSlide = movementSliderToRight(indexSlide);
      resetAnimation();
    },
    '',
    true,
  );

  function startAnimation() {
    return setInterval(() => {
      indexSlide = movementSliderToRight(indexSlide);
    }, 5000);
  }

  function resetAnimation() {
    clearInterval(intervalId);
    intervalId = startAnimation();
  }

  //   const animation = () => {
  //     return setInterval(() => {

  //       indexSlide = movementSliderToRight(indexSlide);
  //     }, 5000);
  //   };

  intervalId = startAnimation();
}
