import { userAddress, userSignIn } from "../../user-data/user-data"

export default function checkAllInputsFilled(page: string): boolean{
    if(page === 'registarte'){
        const { login, password, paymentMethod, address } = userAddress;
        return (
            login.trim() !== '' &&
            password.trim() !== '' &&
            paymentMethod.trim() !== '' &&
            address.city.trim() !== '' &&
            address.street.trim() !== '' &&
            address.houseNumber.trim() !== ''
        );
    }

     const { login, password } = userSignIn;
        return (
            login.trim() !== '' &&
            password.trim() !== ''
        );

}