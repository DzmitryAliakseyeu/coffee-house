import { OrderToServerI } from "../interfaces/interfaces";
import { userAddress, userSignIn } from "../user-data/user-data";

export default async function confirmOrderRequest(order: OrderToServerI) {
  let response = await fetch(
    'https://6kt29kkeub.execute-api.eu-central-1.amazonaws.com/auth/orders/confirm',
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', 
        },
        body: JSON.stringify({
            order
        })
    }
  );

  if (!response.ok) {
    throw new Error(`Server error: ${response.status}`);
  }

  return await response.json();
}
