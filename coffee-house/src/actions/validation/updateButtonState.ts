import checkAllInputsFilled from "./checkAllFormFields";

export default function updateButtonState() {
        const buttonRegistration = document.querySelector('.button-registration-request') as HTMLButtonElement;
        const buttonSignIn =  document.querySelector('.button-sign-in-request') as HTMLButtonElement;
        
        if(buttonRegistration){
            console.log('registrate')
            buttonRegistration.disabled = !checkAllInputsFilled('registrate')
            return
        }

          if(buttonSignIn){
             console.log('sign-in')
            buttonSignIn.disabled = !checkAllInputsFilled('sign-in')
            return
        }
   
  };