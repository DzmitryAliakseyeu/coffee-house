import '../loader/loader.css';

export function showErrorText(parentElement: string) {
  console.log(parentElement);
  const parent = document.querySelector(`${parentElement}`) as HTMLElement;
  let containerSection = parent.firstElementChild as HTMLElement;

  if (parentElement === '.modal') {
    console.log('modal open');
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
  } else {
    Array.from(containerSection.children).forEach((el) => {
      (el as HTMLElement).style.display = 'none';
    });
  }

  if (document.querySelector('.error')) return;

  const errorBlock = document.createElement('div');
  errorBlock.classList.add('error');
  containerSection?.append(errorBlock);

  const errorText = document.createElement('p');
  errorText.classList.add('loader-text');
  errorText.classList.add('heading-3');
  errorText.classList.add('text-dark');
  errorBlock.append(errorText);
  errorText.textContent = 'Something went wrong. Please, refresh the page';
}

export function hideErrorText(parentElement: string) {
  const parent = document.querySelector(`${parentElement}`) as HTMLElement;
  const containerSection = parent.firstElementChild as HTMLElement;
  const error = document.querySelector('.error');

  if (!error) return;

  error.remove();

  if (parentElement === '.menu') {
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
