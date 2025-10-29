import { userAddress, userSignIn } from '../../user-data/user-data';

export default function checkAllInputsFilled(page: string): boolean {
  if (page === 'registrate') {
    console.log(userAddress)
    const { login, password, address } = userAddress;
    return (
      login.trim() !== '' &&
      password.trim() !== '' &&

      address.city.trim() !== '' &&
      address.street.trim() !== '' &&
      (address.houseNumber.trim() !== ''&& +address.houseNumber.trim() > 1)
    );
  }

  const { login, password } = userSignIn;
  return login.trim() !== '' && password.trim() !== '';
}
