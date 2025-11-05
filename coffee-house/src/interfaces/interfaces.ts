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
  discountPrice?: string;
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
  id: string;
  name: string;
  size: string;
  selectSize: string;
  extras: string[];
  totlatPrice: ProductPriceInLSI[] | string;
}

export interface ProductPriceInLSI {
  price: string;
  discountPrice?: string;
}

export interface OrderI {
  id: string;
  name: string;
  size: string;
  selectSize: string;
  extras: string[];
  discountPrice: number;
  price: {
    base: number;
    size: number;
    discount: number;
    additivies: number[];
  };
  totlatPrice: number;
  totalDiscountSum: number;
}

export interface AddressOptionI {
  city: string;
  streets: string[];
}

export interface UserAddressI {
  city: string;
  street: string;
  houseNumber: string;
}

export interface UserDataI {
  login: string;
  password: string;
  confirmPassword: string;
  paymentMethod: string;
  address: UserAddressI;
}

export interface UserSignInI {
  login: string;
  password: string;
}

export interface UpdatedUserDataI {
  login: string;
  paymentMethod: string;
  address: {
    city: string;
    street: string;
    houseNumber: string;
  };
}

type PaymenthMethodI = 'cash' | 'card';

export interface UserProfileFromServerI {
  city: string;
  createdAt: string;
  houseNumber: string;
  id: number;
  login: string;
  paymentMethod: PaymenthMethodI;
  street: string;
}

export interface OrderToServerI {
  items: OrderItemToServerI[];
  totalPrice: number;
}

export interface OrderItemToServerI {
  productId: number;
  size: string;
  additives: string[];
  quantity: number;
}
