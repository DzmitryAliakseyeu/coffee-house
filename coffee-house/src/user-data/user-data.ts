import { UserDataI, UserSignInI } from "../interfaces/interfaces";

export let userAddress: UserDataI = {
    login: '',
    password: '',
    confirmPassword: '',
    paymentMethod: '',
    address: {
        city: '',
        street: '',
        houseNumber: ''
    }
}

export let userSignIn: UserSignInI = {
    login: '',
    password: ''
}