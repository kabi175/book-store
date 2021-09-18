import React from 'react';
import { View } from 'react-native';
import { FeedScreen, CartScreen } from '../screen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import { useCartStore } from '../store';
import { observer } from 'mobx-react-lite';
export default function AppNav() {
	const Tab = createBottomTabNavigator<AppNavParam>();
	return (
		<Tab.Navigator screenOptions={{ headerShown: false }}>
			<Tab.Screen
				name='Feed'
				component={FeedScreen}
				options={{
					tabBarShowLabel: false,
					tabBarIcon: () => (
						<Icon name='home' type='font-awesome' color='orange' />
					),
				}}
			/>
			<Tab.Screen
				name='Cart'
				component={CartScreen}
				options={{
					tabBarShowLabel: false,

					tabBarIcon: () => <CartTabIcon />,
				}}
			/>
		</Tab.Navigator>
	);
}

const CartTabIcon = observer(() => {
	const cartStore = useCartStore();
	if (cartStore.isEmpty) {
		return <Icon name='shopping-cart' type='font-awesome' color='orange' />;
	}
	return (
		<View>
			<View style={{ left: 10, top: 2 }}>
				<Icon
					name='circle'
					type='font-awesome'
					color='orange'
					size={10}
				/>
			</View>
			<Icon name='shopping-cart' type='font-awesome' color='orange' />
		</View>
	);
});
