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
  let touchStartX = 0;
  let touchEndX = 0;

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
    lastStartTime = Date.now();
    return setTimeout(() => {
      indexSlide = movementSliderToRight(indexSlide);
      resetAnimation();
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
    pauseControllerAnimation();
  }

  function resumeAnimation() {
    if (!paused) return;
    paused = false;
    intervalId = startAnimation();
    resumeControllerAnimation();
  }

  function pauseControllerAnimation() {
    const activeController = document.querySelector(
      '.controller.controller-active::after',
    );
    if (!activeController) return;
    activeController.style.animationPlayState = 'paused';
  }

  function resumeControllerAnimation() {
    const activeController = document.querySelector(
      '.controller.controller-active::after',
    );
    if (!activeController) return;
    activeController.style.animationPlayState = 'running';
  }

  slider.addEventListener('mouseenter', pauseAnimation);
  slider.addEventListener('mouseleave', resumeAnimation);

  slider.addEventListener(
    'touchstart',
    (e) => {
      pauseAnimation();
      touchStartX = e.touches[0].clientX;
    },
    { passive: true },
  );

  slider.addEventListener(
    'touchend',
    (e) => {
      touchEndX = e.changedTouches[0].clientX;
      const swipeDistance = touchEndX - touchStartX;
      const minSwipe = 50;

      if (swipeDistance > minSwipe) {
        indexSlide = movementSliderToLeft(indexSlide);
        resetAnimation();
      } else if (swipeDistance < -minSwipe) {
        indexSlide = movementSliderToRight(indexSlide);
        resetAnimation();
      }

      resumeAnimation();
    },
    { passive: true },
  );

  slider.addEventListener('touchcancel', resumeAnimation, { passive: true });

  intervalId = startAnimation();
}
