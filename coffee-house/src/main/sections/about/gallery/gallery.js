import { galleryData } from '../../../../data/gallery-data';
import './gallery.css';

export default function createGallery(parent) {
  const gallery = document.createElement('div');
  gallery.classList.add('gallery');
  parent.append(gallery);

  let galleryContainer;

  galleryData.forEach((img, i) => {
    if (i % 2 === 0) {
      galleryContainer = document.createElement('div');
      galleryContainer.classList.add('gallery-container');
      galleryContainer.classList.add(`gallery-container-${i}`);
      gallery.append(galleryContainer);
    }

    const imgBox = document.createElement('div');
    imgBox.classList.add('img-box');
    galleryContainer.append(imgBox);

    imgBox.style.backgroundImage = `url(${img.srcImg})`;

    // const image = document.createElement('img');
    // image.classList.add('gallery-img');
    // imgBox.append(image);

    // image.src = img.srcImg;
    // image.alt = img.alt;
  });
}
