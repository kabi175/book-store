import React, { useContext, createContext } from 'react';
import { makeAutoObservable, runInAction } from 'mobx';
import { loadBooks } from '../api';

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
	public get isEmpty(): boolean {
		if (this._books.length == 0) return true;
		return false;
	}
	public get isLoading(): boolean {
		return this._loading;
	}

	public async load() {
		runInAction(() => {
			this._loading = true;
		});
		const products = await loadBooks();
		runInAction(() => {
			this._books.push(...products);
			this._loading = false;
		});
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
