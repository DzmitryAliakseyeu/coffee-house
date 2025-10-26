import { userSignIn } from '../user-data/user-data';

export default async function singInUserRequest() {
  let response = await fetch(
    'https://6kt29kkeub.execute-api.eu-central-1.amazonaws.com/auth/login',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        login: userSignIn.login,
        password: userSignIn.password,
      }),
    },
  );

  if (!response.ok) {
    throw new Error(`Server error: ${response.status}`);
  }

  return await response.json();
}
