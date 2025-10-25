export default async function getProfile() {
  let response = await fetch(
    'https://6kt29kkeub.execute-api.eu-central-1.amazonaws.com/auth/profile',
  );

  return await response.json();
}
