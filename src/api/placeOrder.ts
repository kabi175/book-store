export async function placeOrder(order: OrderPayload) {
	await fetch('https://api.tago.care/assignment/', {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(order),
	});
}
