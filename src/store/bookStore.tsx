import React, { useContext, createContext } from 'react';
import { makeAutoObservable } from 'mobx';

export class BookStore {
	private _books: Product[] = [];
	private _loading: boolean = false;
	private _lastLoadedIndex: number = 0;

	public constructor() {
		makeAutoObservable(this);
	}
	public get books(): Product[] {
		return this._books;
	}
	public isLoading(): boolean {
		return this._loading;
	}

	public load() {
		this._loading = true;
		const products: Product[] = []; //[TODO]
		this._books.push(...products);
		this._loading = false;
	}

	public findBookById(id: string): Product | undefined {
		return this._books.find((product) => {
			if (product.id == id) return product;
		});
	}
}

const bookStore = new BookStore();
const BookStoreContext = createContext<BookStore>(bookStore);
export const useBookStore = () => useContext(BookStoreContext);

export function BookStoreProvider({ children }: { children: React.ReactNode }) {
	return (
		<BookStoreContext.Provider value={bookStore}>
			{children}
		</BookStoreContext.Provider>
	);
}
