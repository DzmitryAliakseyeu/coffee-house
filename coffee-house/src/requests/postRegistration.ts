import { userAddress } from '../user-data/user-data';

export default async function registerUserRequest() {
  let response = await fetch(
    'https://6kt29kkeub.execute-api.eu-central-1.amazonaws.com/auth/register',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        login: userAddress.login,
        password: userAddress.password,
        confirmPassword: userAddress.password,
        city: userAddress.address.city,
        street: userAddress.address.street,
        houseNumber: +userAddress.address.houseNumber,
        paymentMethod: userAddress.paymentMethod,
      }),
    },
  );

  if (!response.ok) {
    throw new Error(`Server error: ${response.status}`);
  }

  return await response.json();
}
