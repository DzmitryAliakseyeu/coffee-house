import createRowSlider from "../row-slider/row-slider";
import './sliderTrack.css'

export default function createSliderTrack(parent){
    const sliderTrack = document.createElement('div');
    sliderTrack.classList.add('slider-track');
    parent.append(sliderTrack);

    createRowSlider(sliderTrack)
}