import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LogInScreen } from '../screen';

export default function AuthNav() {
	const Stack = createStackNavigator<AuthNavParam>();

	return (
		<Stack.Navigator
			initialRouteName='SignIn'
			screenOptions={{ headerShown: false }}
		>
			<Stack.Screen name='SignIn' component={LogInScreen} />
		</Stack.Navigator>
	);
}
