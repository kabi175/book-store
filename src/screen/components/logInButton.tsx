import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function LogInButton({ onPress }: { onPress: () => void }) {
	return (
		<TouchableOpacity onPress={onPress} style={styles.contanier}>
			<Image
				style={styles.logo}
				source={require('../../../assets/google-signin-logo.png')}
			/>
			<Text style={styles.title}>Sign in with Google</Text>
		</TouchableOpacity>
	);
}
const styles = StyleSheet.create({
	contanier: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		minWidth: 220,
		maxHeight: 70,
		backgroundColor: '#4285F4',
	},
	title: {
		fontSize: 22,
		fontWeight: 'bold',
		fontFamily: 'Roboto',
		color: 'white',
		padding: 5,
	},
	logo: {
		height: 70,
		width: 70,
	},
});
