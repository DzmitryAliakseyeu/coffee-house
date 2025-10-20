export default async function getProducts(){
    let response = await fetch('https://6kt29kkeub.execute-api.eu-central-1.amazonaws.com/products');

    return await response.json()
}