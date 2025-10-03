import './mobile.css'

export default function createMobile(parent){
    const mobile = document.createElement('div');
  mobile.classList.add('mobile');
  parent.append(mobile);

}