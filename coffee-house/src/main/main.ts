import createCartSection from '../cart/cart-section/cart-section';
import createMenuSection from '../menu/menu-section/menu-section';
import createRegistrationSection from '../registration/registration-section/registration-section';
import createSignSection from '../sign-in/sing-in-section/sign-in-section';
import './main.css';
import createAboutSection from './sections/about/about';
import createFavoriteSection from './sections/favorite/favorite';
import createMobileAppSection from './sections/mobile-app/mobile-app';

export default function createMain(parent: HTMLElement, isMainPage = true, isMenuPage = false, isCartPage = false, isSignInPage = false, isRegistrationPage = false) {
  const main = document.createElement('main');
  main.classList.add('main');
  parent.append(main);

  if (isMainPage) {
    createFavoriteSection(main);
    createAboutSection(main);
    createMobileAppSection(main);
  } else if(isMenuPage){
    createMenuSection(main);
  } else if(isCartPage){
    createCartSection(main)
  } else if(isSignInPage){
    createSignSection(main)
  }else if(isRegistrationPage){
    createRegistrationSection(main)
  }
}
