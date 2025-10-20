export default function showErrorText(){
    const container = document.querySelector('.favorite')?.children[0];
    const sliderContainer = document.querySelector('.slider-container');
    sliderContainer?.remove();


    const errorText = document.createElement('p');
    container?.append(errorText);
    errorText.textContent = 'Something went wrong. Please, refresh the page'
}