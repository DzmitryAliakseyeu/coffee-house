import createButton from "../../button/button";
import createNavigation from "./navigation/navigation";
import './containerHeader.css';

export default function createContainerHeader(parent){
    const containerHeader = document.createElement('div');
    containerHeader.classList.add('container-header');
    parent.append(containerHeader);

    const headerMenu = document.createElement('div');
    headerMenu.classList.add('header-menu');
    containerHeader.append(headerMenu)

    const logo = document.createElement('a');
    logo.classList.add('logo');
    headerMenu.append(logo);

    const logoImage = document.createElement('img');
    logoImage.classList.add('logo-img');
    logo.append(logoImage);
    logoImage.src ='../../public/logo.svg';

    createNavigation(headerMenu);

    createButton(headerMenu, 'menu', ()=> console.log('click'), 'Menu', true);
}