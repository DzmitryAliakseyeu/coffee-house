import switchSlide from './switchSlide';

export default function movementSliderToRight(index) {
  let step = index + 1;
  if (step > 2) {
    index = 0;
    switchSlide(index);
    return index;
  }
  switchSlide(step);
  index = step;
  return index;
}
