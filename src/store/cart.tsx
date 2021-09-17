import { makeAutoObservable } from 'mobx';
import React, { useContext, createContext } from 'react';

export class CartStore {
	_products: Product[] = [];

	constructor() {
		makeAutoObservable(this);
	}

	isEmpty(): boolean {
		if (this._products.length == 0) return true;
		return false;
	}

	add(product: Product) {
		this._products.push(product);
	}

	remove(product: Product) {
		const updatedProducts = this._products.filter((item) => {
			if (item.id == product.id) return false;
			else return true;
		});
	}

	placeOrder() {}
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
