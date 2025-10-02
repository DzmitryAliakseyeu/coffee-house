import setContoller from './setContoller';
import switchSlide from './switchSlide';

export default function movementSliderToRight(index) {
  let step = index + 1;
  if (step > 2) {
    index = 0;
    switchSlide(index);
    setContoller(index);
    return index;
  }
  switchSlide(step);
  index = step;
  setContoller(index);
  return index;
}
