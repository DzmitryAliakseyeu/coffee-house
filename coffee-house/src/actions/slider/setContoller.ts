export default function setContoller(index: number) {
  const controls = document.querySelectorAll('.controller');

  controls.forEach((controller, i) => {
    if (i !== index) {
      controller.classList.remove('controller-active');
    }

    requestAnimationFrame(() => {
      controls[index].classList.add('controller-active');
    });
  });
}
