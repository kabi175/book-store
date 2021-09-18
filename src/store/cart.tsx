import { makeAutoObservable } from 'mobx';
import React, { useContext, createContext } from 'react';
import { placeOrder } from '../api/placeOrder';

export class CartStore {
	private _products: Product[] = [];

	public constructor() {
		makeAutoObservable(this);
	}

	public get totalAmount() {
		let total = 0;
		this._products.forEach((item) => (total += item.price));
		return total;
	}

	public get isEmpty(): boolean {
		if (this._products.length == 0) return true;
		return false;
	}

	public add(product: Product) {
		const isExist = this.findById(product.id);
		if (isExist) return;
		this._products.push(product);
	}
	public findById(productId: string) {
		const book = this._products.find((book) => {
			if (book.id == productId) return book;
		});
		return book;
	}
	public removeById(id: string) {
		const updatedProducts = this._products.filter((item) => {
			if (item.id != id) return item;
		});
		this._products = updatedProducts;
	}
	public get books() {
		return this._products;
	}

	public clear() {
		this._products = [];
	}

	private extractOrder(username: string): OrderPayload {
		const books = this._products.map((product) => {
			return {
				id: product.id,
				title: product.title,
			};
		});
		const order: OrderPayload = {
			name: username,
			total: this.totalAmount,
			books: books,
		};
		return order;
	}

	public async placeOrder(username: string): Promise<'failed' | 'success'> {
		const order = this.extractOrder(username);
		try {
			await placeOrder(order);
		} catch (err) {
			return 'failed';
		}
		this.clear();
		return 'success';
	}
}

const cartStore = new CartStore();
const CartContext = createContext<CartStore>(cartStore);
export const useCartStore = () => useContext(CartContext);

export function CartStoreProvider({ children }: { children: React.ReactNode }) {
	return (
		<CartContext.Provider value={cartStore}>
			{children}
		</CartContext.Provider>
	);
}
