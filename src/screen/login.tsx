import React from 'react';
import { View, StyleSheet } from 'react-native';
import * as Google from 'expo-google-app-auth';
import { useAuthStore } from '../store';
import LogInButton from './components/logInButton';

export default function Login() {
	const authStore = useAuthStore();

	const signInGoole = async () => {
		const config = {
			androidClientId:
				'805480152400-18ud78iteqv6004gtl4cikp4kc2na8na.apps.googleusercontent.com',
			androidStandaloneAppClientId:
				'805480152400-prl8me0498msllg78d3q9e7cplsudk2i.apps.googleusercontent.com',
			scopes: ['profile', 'email'],
		};
		try {
			const result = await Google.logInAsync(config);
			if (result.type == 'success') {
				authStore.login(result.user);
			}
		} catch (error) {}
	};

	return (
		<View style={style.contanier}>
			<LogInButton onPress={signInGoole} />
		</View>
	);
}

const style = StyleSheet.create({
	contanier: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
