export function showErrorText(parentElement: string){
    const parent = document.querySelector(`${parentElement}`) as HTMLElement;
    const containerSection = parent.firstElementChild as HTMLElement;

    Array.from(containerSection.children).forEach((el) => {
        (el as HTMLElement).style.display = 'none'
    })

    if(document.querySelector('.error')) return

     const errorBlock = document.createElement('div');
     errorBlock.classList.add('error');
    containerSection?.append(errorBlock);
    
    const errorText = document.createElement('p');
    errorText.classList.add('loader-text');
    errorText.classList.add('heading-3');
    errorText.classList.add('text-dark')
    errorBlock.append(errorText);
    errorText.textContent = 'Something went wrong. Please, refresh the page';    
}

export function hideErrorText(parentElement: string){
    const parent = document.querySelector(`${parentElement}`) as HTMLElement;
    const containerSection = parent.firstElementChild as HTMLElement;
    const error = document.querySelector('.error');

    if(!error) return

    error.remove()

    Array.from(containerSection.children).forEach((el) => {
        (el as HTMLElement).removeAttribute('style');
    })


}