import { userAddress } from "../../user-data/user-data"

export default function checkAllInputsFilled(): boolean{
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