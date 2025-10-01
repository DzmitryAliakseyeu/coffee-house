import createControls from "../controls/controls";
import createSlider from "../slider/slider";
import './sliderContainer.css'

export default function createSliderContainer(parent){
    const sliderContainer = document.createElement('div');
    sliderContainer.classList.add('slider-container');
    parent.append(sliderContainer);

    createSlider(sliderContainer)
    createControls(sliderContainer)
}