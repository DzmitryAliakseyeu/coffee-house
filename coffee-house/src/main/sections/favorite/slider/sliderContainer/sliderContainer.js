import setContoller from '../../../../../actions/slider/setContoller';
import createControls from '../controls/controls';
import createSlider, { indexSlide } from '../slider/slider';
import './sliderContainer.css';

export default function createSliderContainer(parent) {
  const sliderContainer = document.createElement('div');
  sliderContainer.classList.add('slider-container');
  parent.append(sliderContainer);

  createSlider(sliderContainer);
  createControls(sliderContainer);

  setContoller(indexSlide)
}
