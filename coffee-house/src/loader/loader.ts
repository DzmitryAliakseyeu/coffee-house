import './loader.css';

export function showLoader(parentElement: string) {
  const parent = document.querySelector(`${parentElement}`) as HTMLElement;
  let containerSection = parent.firstElementChild as HTMLElement;

  if (parentElement === '.modal') {
    const modalCard = document.querySelector('.modal-card');
    if (modalCard) {
      modalCard.remove();
    }
    containerSection = document.createElement('div');
    containerSection.classList.add('overlay');
    parent.append(containerSection);
  } else if (parentElement === '.menu') {
    const menuOfferTabs = document.querySelector(
      '.menu-offer-tabs',
    ) as HTMLElement;
    menuOfferTabs.style.display = 'none';
    const menuProductsGrid = document.querySelector(
      '.menu-products-grid',
    ) as HTMLElement;
    menuProductsGrid.style.display = 'none';
  } else if (
    parentElement === '.modal-registration' ||
    parentElement === '.modal-sign-in' ||
    parentElement === '.modal-cart'
  ) {
    containerSection = document.createElement('div');
    containerSection.classList.add('overlay');
    parent.append(containerSection);
  } else {
    Array.from(containerSection.children).forEach((el) => {
      (el as HTMLElement).style.display = 'none';
    });
  }

  if (document.querySelector('.loader')) return;

  const loaderBlock = document.createElement('div');
  loaderBlock.classList.add('loader');
  containerSection?.append(loaderBlock);

  const loaderText = document.createElement('p');
  loaderText.classList.add('loader-text');
  loaderText.classList.add('heading-3');
  loaderText.classList.add('text-dark');
  loaderBlock.append(loaderText);
  loaderText.textContent = 'Loading...';

  const loaderImages = document.createElement('ul');
  loaderImages.classList.add('loader-images');
  loaderBlock.append(loaderImages);

  for (let i = 0; i < 3; i += 1) {
    const loaderImage = document.createElement('li');
    loaderImage.classList.add('loader-image');
    loaderImages.append(loaderImage);
  }
}

export function hideLoader(parentElement: string) {
  const parent = document.querySelector(`${parentElement}`) as HTMLElement;
  let containerSection = parent.firstElementChild as HTMLElement;
  const loader = document.querySelector('.loader');

  if (!loader) return;

  loader.remove();

  if (parentElement === '.modal') {
    containerSection = document.querySelector('.overlay') as HTMLElement;

    if (containerSection) {
      containerSection.remove();
    }
  } else if (parentElement === '.menu') {
    const menuOfferTabs = document.querySelector(
      '.menu-offer-tabs',
    ) as HTMLElement;
    menuOfferTabs.removeAttribute('style');
    const menuProductsGrid = document.querySelector(
      '.menu-products-grid',
    ) as HTMLElement;
    menuProductsGrid.removeAttribute('style');
  } else {
    Array.from(containerSection.children).forEach((el) => {
      (el as HTMLElement).removeAttribute('style');
    });
  }
}
