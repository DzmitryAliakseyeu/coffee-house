import { UserSignInI } from "../interfaces/interfaces";

export default async function getProfile(token: string) {
 const response = await fetch(
  'https://6kt29kkeub.execute-api.eu-central-1.amazonaws.com/auth/profile',
  {
    method: 'GET',
    headers: {
      'accept': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  }
);
  

  return await response.json();
}
