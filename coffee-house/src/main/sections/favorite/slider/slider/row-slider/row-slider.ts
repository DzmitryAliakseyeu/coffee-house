
import { sliderData } from '../../../../../../data/slider-data';
import showErrorText from '../../../../../../error/error';
import { SliderDataI } from '../../../../../../interfaces/interfaces';
import getFavoritesProducts from '../../../../../../requests/getFavorites';
import createContent from './content/content';

import './row-slider.css';

export default async function createRowSlider(parent: HTMLElement) {
  const rowSlider = document.createElement('div');
  rowSlider.classList.add('row-slider');
  parent.append(rowSlider);

  let favoriteProductsData: SliderDataI[] = []
  
  try {
    let response = await getFavoritesProducts();

    favoriteProductsData = response.data


    favoriteProductsData.forEach((slide) => {
      console.log(slide)
      createContent(rowSlider, slide);
    });
  } catch {
    favoriteProductsData = []
    console.log('error')
    showErrorText()
  }

  // sliderData.forEach((slide) => {
  //   createContent(rowSlider, slide);
  // });
}
