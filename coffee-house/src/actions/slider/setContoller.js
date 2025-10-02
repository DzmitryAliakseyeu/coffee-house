export default function setContoller(index){
    const controls = document.querySelectorAll('.controller');
    console.log(controls)
    controls.forEach((controller) => {
        controller.classList.remove('bgc-dark');
    })

    controls[index].classList.add('bgc-dark')
}