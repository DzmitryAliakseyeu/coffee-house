import { hideErrorText, showErrorText } from '../../../../../../error/error';

import { SliderDataI } from '../../../../../../interfaces/interfaces';
import { hideLoader, showLoader } from '../../../../../../loader/loader';

import getFavoritesProducts from '../../../../../../requests/getFavorites';
import createContent from './content/content';

import './row-slider.css';

export default async function createRowSlider(parent: HTMLElement) {
  const rowSlider = document.createElement('div');
  rowSlider.classList.add('row-slider');
  parent.append(rowSlider);

  let favoriteProductsData: SliderDataI[] = [];

  hideErrorText('.favorite');

  showLoader('.favorite');

  try {
    let response = await getFavoritesProducts();

    favoriteProductsData = response.data;

    setTimeout(() => hideLoader('.favorite'), 1000);

    favoriteProductsData.forEach((slide) => {
      createContent(rowSlider, slide);
    });
  } catch {
    favoriteProductsData = [];
    console.log('error');
    hideLoader('.favorite');
    showErrorText('.favorite');
  }
}
