import './mobile.css'

export default function createMobile(parent){
    const mobile = document.createElement('div');
  mobile.classList.add('mobile');
  parent.append(mobile);

  const mobileScreens = document.createElement('img');
  mobileScreens.classList.add('mobile-screens');
  mobile.append(mobileScreens);
  mobileScreens.alt = 'mobile-screens';
  mobileScreens.src = '../../../../public/mobile-app/mobile-screens.png'

}