import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useAuthStore } from '../store';
import AppNav from './appNavigation';
import AuthNav from './authNavigation';
import { observer } from 'mobx-react-lite';

function Router() {
	const authStore = useAuthStore();
	return (
		<NavigationContainer>
			{authStore.isLoggedIn() ? <AppNav /> : <AuthNav />}
		</NavigationContainer>
	);
}
export default observer(Router);
