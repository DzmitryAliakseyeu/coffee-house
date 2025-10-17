export default function switchSlide(i: number) {
  const rowSlider = document.querySelector('.row-slider') as HTMLElement;
  if (rowSlider) {
    rowSlider.style.transform = `translateX(-${i * 100}%)`;
  }
}
