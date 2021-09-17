import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { FeedScreen, CartScreen } from '../screen';

export default function AppNav() {
	const Stack = createStackNavigator<AppNavParam>();

	return (
		<Stack.Navigator
			initialRouteName='Feed'
			screenOptions={{ headerShown: false }}
		>
			<Stack.Screen name='Feed' component={FeedScreen} />
			<Stack.Screen name='Cart' component={CartScreen} />
		</Stack.Navigator>
	);
}
