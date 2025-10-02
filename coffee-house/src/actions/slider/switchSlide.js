export default function switchSlide(i) {
  const rowSlider = document.querySelector('.row-slider');
  if (rowSlider) {
    rowSlider.style.transform = `translateX(-${i * 100}%)`;
  }
}
