import './loader.css'

export function showLoader(parentElement: string){
    const parent = document.querySelector(`${parentElement}`) as HTMLElement;
    const containerSection = parent.firstElementChild as HTMLElement;

    Array.from(containerSection.children).forEach((el) => {
        (el as HTMLElement).style.display = 'none'
    })

    if(document.querySelector('.loader')) return

    console.log(containerSection)
    // const elToRemove = document.querySelector(`.${elementToRemove}`) as HTMLElement;

    // elToRemove.remove()

     const loaderBlock = document.createElement('div');
     loaderBlock.classList.add('loader');
    containerSection?.append(loaderBlock);
    

    const loaderText = document.createElement('p');
    loaderText.classList.add('loader-text');
    loaderText.classList.add('heading-3');
    loaderText.classList.add('text-dark')
    loaderBlock.append(loaderText);
    loaderText.textContent = 'Loading...'

    const loaderImages = document.createElement('ul')
    loaderImages.classList.add('loader-images')
    loaderBlock.append(loaderImages);

    for(let i = 0; i < 3; i += 1){
        const loaderImage = document.createElement('li')
        loaderImage.classList.add('loader-image')
        loaderImages.append(loaderImage);
    }
    
}


export function hideLoader(parentElement: string){
     const parent = document.querySelector(`${parentElement}`) as HTMLElement;
      const containerSection = parent.firstElementChild as HTMLElement;
    const loader = document.querySelector('.loader');

    if(!loader) return

    loader.remove()

    

    Array.from(containerSection.children).forEach((el) => {
        (el as HTMLElement).removeAttribute('style');
    })


}