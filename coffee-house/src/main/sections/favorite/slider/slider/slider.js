import createButton from "../../../../../button/button";
import createRowSlider from "./row-slider/row-slider";
import './slider.css'
import createSliderTrack from "./sliderTrack/sliderTrack";

export default function createSlider(parent){
    const slider = document.createElement('div');
    slider.classList.add('slider');
    parent.append(slider);

    createButton(slider, 'slider-left', ()=> console.log('left'), '', true);
    createSliderTrack(slider)
    // createRowSlider(slider)
    createButton(slider, 'slider-right', ()=> console.log('right'), '', true);

}