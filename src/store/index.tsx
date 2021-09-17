import React from 'react';
import { useAuthStore, AuthStore, AuthStoreProvider } from './auth';
import { useCartStore, CartStore, CartStoreProvider } from './cart';
import { useBookStore, BookStore, BookStoreProvider } from './bookStore';

export function StoreProvider({ children }: { children: React.ReactNode }) {
	return (
		<AuthStoreProvider>
			<BookStoreProvider>
				<CartStoreProvider>{children}</CartStoreProvider>
			</BookStoreProvider>
		</AuthStoreProvider>
	);
}

export {
	useAuthStore,
	AuthStore,
	useCartStore,
	CartStore,
	useBookStore,
	BookStore,
};
