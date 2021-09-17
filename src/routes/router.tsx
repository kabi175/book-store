import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useAuthStore } from '../store';
import AppNav from './appNavigation';
import AuthNav from './authNavigation';

export default function Router() {
	const authStore = useAuthStore();
	return (
		<NavigationContainer>
			{authStore.isLoggedIn() ? <AppNav /> : <AuthNav />}
		</NavigationContainer>
	);
}
