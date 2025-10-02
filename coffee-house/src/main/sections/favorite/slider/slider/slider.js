import movementSliderToLeft from '../../../../../actions/slider/movementSliderToLeft';
import movementSliderToRight from '../../../../../actions/slider/movementSliderToRight';
import setContoller from '../../../../../actions/slider/setContoller';

import createButton from '../../../../../button/button';
import './slider.css';
import createSliderTrack from './sliderTrack/sliderTrack';

  export let indexSlide = 0;

export default function createSlider(parent) {

  const slider = document.createElement('div');
  slider.classList.add('slider');
  parent.append(slider);

  createButton(
    slider,
    'slider-left',
    () => {
      return (indexSlide = movementSliderToLeft(indexSlide));
    },
    '',
    true,
  );
  createSliderTrack(slider);
  createButton(
    slider,
    'slider-right',
    () => {
      return (indexSlide = movementSliderToRight(indexSlide));
    },
    '',
    true,
  );

 

  const animation = () => {
    return setInterval(() => {
       
      indexSlide = movementSliderToRight(indexSlide);
    }, 5000);
  };

  const intervalId = animation();
}
