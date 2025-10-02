import { sliderData } from '../../../../../data/slider-data';
import './controls.css';

export default function createControls(parent) {
  const controls = document.createElement('ul');
  controls.classList.add('controls');
  parent.append(controls);

  sliderData.forEach((_, i) => {
    const item = document.createElement('li');
    item.classList.add('controller');
    // item.classList.add('bgc-light');
    item.id = `controller-${i}`;
    controls.append(item);
  });
}
