import { menuOfferTabsData } from "../data/menu-offer-tabs-data";

export interface ButtonI {
  parent: HTMLElement;
  className: string;
  action: () => void;
  text: string;
  hasIcon?: boolean;
  isHtml?: boolean;
}

export interface GalleryDataI {
     
    srcImg: string,
    alt: string,
 
}


export interface SliderDataI {
    srcImg: string,
    slideTitle: string,
    description:
      string,
    price: string,
}

export interface MenuOfferTabsDataI {
     srcImg: string,
    src: string,
    title: string,
}

export interface ProductSizeI {
  size: string;
  'add-price': string; 
}

export interface ProductSizesI {
  s: ProductSizeI;
  m: ProductSizeI;
  l: ProductSizeI;
}

export interface ProductAdditiveI {
  name: string;
  'add-price': string;
}

export interface ProductsDataI {
   name: string;
  description: string;
  price: string;
  category: 'coffee' | 'tea' | 'dessert';
  sizes: ProductSizesI;
  additives: ProductAdditiveI[];
}

export interface PreviewCardI {
  parent: HTMLElement,
  srcImg: string,
  title: string,
  description: string,
  price: string,
}
