export default async function getFavoritesProducts(){
    let response = await fetch('https://6kt29kkeub.execute-api.eu-central-1.amazonaws.com/products/favorites');

    let favoriteProducts = await response.json()
    console.log(favoriteProducts);

    return favoriteProducts
}