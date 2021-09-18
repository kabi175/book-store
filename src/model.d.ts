interface Product {
	id: string;
	title: string;
	description: string;
	price: number;
	imageUri: string;
}

interface BookPayload {
	items: {
		id: string;
		volumeInfo: {
			title: string;
			description: string;
			pageCount: number;
			imageLinks: {
				smallThumbnail: string;
			};
		};
	}[];
}

interface OrderPayload {
	name: string;
	total: number;
	books: {
		id: string;
		title: string;
	}[];
}
