import './footer.css'
import createOfferFooter from './offerFooter/offerFooter';

export default function createFooter(parent){
     const footer = document.createElement('footer');
  footer.classList.add('footer');
  parent.append(footer);

  const containerSection = document.createElement('section');
  containerSection.classList.add('container-section');
   containerSection.classList.add('bgc-dark');
  footer.append(containerSection);

  createOfferFooter(containerSection)
}