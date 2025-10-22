export interface ButtonI {
  parent: HTMLElement;
  className: string;
  action: () => void;
  text: string;
  hasIcon?: boolean;
  isHtml?: boolean;
}

export interface GalleryDataI {
  srcImg: string;
  alt: string;
}

export interface SliderDataI {
  name: string;
  slideTitle: string;
  description: string;
  price: string;
}

export interface MenuOfferTabsDataI {
  srcImg: string;
  src: string;
  title: string;
}

export interface ProductSizeI {
  size: string;
  price: string;
  // 'add-price': string;
}

export interface ProductSizesI {
  s: ProductSizeI;
  m: ProductSizeI;
  l: ProductSizeI;
}

export interface ProductAdditiveI {
  name: string;
  price: string;
}

export interface ProductsDataI {
  name: string;
  id: string;
  description: string;
  price: string;
  category: 'coffee' | 'tea' | 'dessert';
  sizes: ProductSizesI;
  additives: ProductAdditiveI[];
  discountPrice?: string;
}

export interface PreviewCardI {
  parent: HTMLElement;
  id: string;
  srcImg: string;
  title: string;
  description: string;
  price: string;
  discountPrice?: string | null;
}

export interface ContactsInfoDataI {
  srcImg: string;
  href: string;
  title: string;
  content: string;
  isLink: boolean;
}

export interface SocialsDataI {
  srcImg: string;
  src: string;
  title: string;
}

export interface ProductInLSI {
  id: string,
  name: string,
  selectSize: string,
  extras: string[],
  price: ProductPriceInLSI[] | string
}

export interface ProductPriceInLSI {
  price: string,
  discountPrice?: string
}

export interface OrderI {
  id: string,
  name: string,
  selectSize: string,
  extras: string[],
  price: {
    base: number,
    size: number,
    discount: number
    additivies: number[]
  },
  totlatPrice: number
}
