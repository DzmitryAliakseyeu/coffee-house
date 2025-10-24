import checkAllInputsFilled from "./checkAllFormFields";

export default function updateButtonState() {
        const buttonRegistration = document.querySelector('.button-registration-request') as HTMLButtonElement;
        console.log(checkAllInputsFilled())
        
        if(buttonRegistration){
            buttonRegistration.disabled = !checkAllInputsFilled()
        }
   
  };