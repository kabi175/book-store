export async function http<T>(request: RequestInfo): Promise<T> {
	const response = await fetch(request);
	const body = await response.json();
	return body;
}
export async function loadBooks(): Promise<Product[]> {
	const data = await http<BookPayload>(
		'https://www.googleapis.com/books/v1/volumes?q=harry+potter&maxResults=20'
	);

	const books: Product[] = data.items.map((payload) => {
		return {
			id: payload.id,
			title: payload.volumeInfo.title,
			description: payload.volumeInfo.description,
			price: payload.volumeInfo.pageCount,
			imageUri: payload.volumeInfo.imageLinks.smallThumbnail,
		};
	});
	return books;
}
