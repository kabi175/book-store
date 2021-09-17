import React from 'react';
import { useAuthStore, AuthStore, AuthStoreProvider } from './auth';
import { useCartStore, CartStore, CartStoreProvider } from './cart';

export function StoreProvider({ children }: { children: React.ReactNode }) {
	return (
		<AuthStoreProvider>
			<CartStoreProvider>{children}</CartStoreProvider>
		</AuthStoreProvider>
	);
}

export { useAuthStore, AuthStore, useCartStore, CartStore };
