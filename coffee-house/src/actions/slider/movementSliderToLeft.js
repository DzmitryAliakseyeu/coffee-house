import setContoller from './setContoller';
import switchSlide from './switchSlide';

export default function movementSliderToLeft(index) {
  let step = index - 1;
  if (step < 0) {
    index = 2;
    switchSlide(index);
    setContoller(index);
    return index;
  }
  switchSlide(step);
  index = step;
  setContoller(index);
  return index;
}
