import { OrderToServerI } from '../interfaces/interfaces';

export default async function confirmOrderRequest(order: OrderToServerI) {
  let token = localStorage.getItem('token');
  let response = await fetch(
    'https://6kt29kkeub.execute-api.eu-central-1.amazonaws.com/orders/confirm',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(order),
    },
  );

  if (!response.ok) {
    throw new Error(`Server error: ${response.status}`);
  }

  return await response.json();
}
