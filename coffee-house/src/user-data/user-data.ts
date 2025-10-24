import { UserDataI } from "../interfaces/interfaces";

export let userAddress: UserDataI = {
    login: '',
    password: '',
    paymentMethod: "card",
    address: {
        city: '',
        street: '',
        houseNumber: ''
    }
  
}