import movementSliderToLeft from '../../../../../actions/slider/movementSliderToLeft';
import movementSliderToRight from '../../../../../actions/slider/movementSliderToRight';

import createButton from '../../../../../button/button';
import './slider.css';
import createSliderTrack from './sliderTrack/sliderTrack';

export let indexSlide = 0;

export default function createSlider(parent) {
   let intervalId;
  let remainingTime = 5000;
  let lastStartTime;
  let paused = false;

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

//   function startAnimation() {
//     lastStartTime = Date.now();
//     return setInterval(() => {
//       indexSlide = movementSliderToRight(indexSlide);
//     }, remainingTime);
//   }

//   function resetAnimation() {
//     clearInterval(intervalId);
//     intervalId = startAnimation();
//   }

 function startAnimation() {
    lastStartTime = Date.now();
    return setTimeout(() => {
      indexSlide = movementSliderToRight(indexSlide);
      resetAnimation(); // restart after each move
    }, remainingTime);
  }

  function resetAnimation() {
    clearTimeout(intervalId);
    remainingTime = 5000;
    intervalId = startAnimation();
  }

  function pauseAnimation() {
    if (paused) return;
    paused = true;
    clearTimeout(intervalId);
    const elapsed = Date.now() - lastStartTime;
    remainingTime -= elapsed;
  }

  function resumeAnimation() {
    if (!paused) return;
    paused = false;
    intervalId = startAnimation();
  }



  intervalId = startAnimation();

  slider.addEventListener('mouseenter', pauseAnimation);
  slider.addEventListener('mouseleave', resumeAnimation);

  slider.addEventListener('touchstart', pauseAnimation, { passive: true });
  slider.addEventListener('touchend', resumeAnimation, { passive: true });
  slider.addEventListener('touchcancel', resumeAnimation, { passive: true });
}
