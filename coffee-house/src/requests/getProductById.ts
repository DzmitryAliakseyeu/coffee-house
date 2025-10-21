export default async function getProductById(id: string){
    let response = await fetch(`https://6kt29kkeub.execute-api.eu-central-1.amazonaws.com/products/${id}`);

    return response.json()
}