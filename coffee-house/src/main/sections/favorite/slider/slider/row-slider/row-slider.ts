
import { sliderData } from '../../../../../../data/slider-data';
import { SliderDataI } from '../../../../../../interfaces/interfaces';
import getFavoritesProducts from '../../../../../../requests/getFavorites';
import createContent from './content/content';

import './row-slider.css';

export default async function createRowSlider(parent: HTMLElement) {
  const rowSlider = document.createElement('div');
  rowSlider.classList.add('row-slider');
  parent.append(rowSlider);

  let favoriteProductsResponse = await getFavoritesProducts();

  let favoriteProductsData: SliderDataI[] = favoriteProductsResponse.data


   favoriteProductsData.forEach((slide) => {
    console.log(slide)
    createContent(rowSlider, slide);
  });
  // sliderData.forEach((slide) => {
  //   createContent(rowSlider, slide);
  // });
}
