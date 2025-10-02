import switchSlide from '../../../../../actions/slider/switchSlide';
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
      let step = index - 1;
      if (step < 0) {
        index = 2;
        switchSlide(index);
        return;
      }
      switchSlide(step);
      index = step;
    },
    '',
    true,
  );
  createSliderTrack(slider);
  createButton(
    slider,
    'slider-right',
    () => {
      let step = index + 1;
      if (step > 2) {
        index = 0;
        switchSlide(index);
        return;
      }
      switchSlide(step);
      index = step;
    },
    '',
    true,
  );
}
