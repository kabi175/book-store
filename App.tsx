import React from 'react';
import Router from './src/routes/router';
import { StoreProvider } from './src/store';

export default function App() {
	return (
		<StoreProvider>
			<Router />
		</StoreProvider>
	);
}
