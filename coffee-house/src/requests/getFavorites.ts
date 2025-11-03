export default async function getFavoritesProducts() {
  let response = await fetch(
    'https://6kt29kkeub.execute-api.eu-central-1.amazonaws.com/products/favorites',
  );

  if (!response.ok) {
    throw new Error(`Server error: ${response.status}`);
  }

  return await response.json();
}
