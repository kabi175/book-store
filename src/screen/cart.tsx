import { observer } from 'mobx-react-lite';
import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	Pressable,
	Platform,
	Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuthStore, useCartStore } from '../store';
import CartPreviewCard from './components/cartPreviewCard';

function Cart() {
	const cartStore = useCartStore();
	const authStore = useAuthStore();
	return (
		<SafeAreaView style={styles.contanier}>
			<View style={styles.header}>
				<Text style={styles.title}>Shopping Cart</Text>
				<View>
					<View style={styles.button}>
						<Pressable
							onPress={() => {
								cartStore.placeOrder(authStore.username);
							}}
						>
							<Text style={styles.buttonText}>Place Order</Text>
						</Pressable>
					</View>
					<View style={styles.totalContanier}>
						<Text style={styles.buttonText}>Total</Text>
						<Text style={styles.buttonText}>
							{cartStore.totalAmount}
						</Text>
					</View>
				</View>
			</View>

			<ScrollView>
				<View style={styles.list}>
					<View style={{ width: 100, height: 100 }} />
					{cartStore.books.map((product, id) => (
						<CartPreviewCard key={id} product={product} />
					))}
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

const SCREEN_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
	contanier: {},
	list: {
		flex: 1,
		justifyContent: 'center',
	},
	header: {
		width: SCREEN_WIDTH,
		height: 150,
		position: 'absolute',
		zIndex: 1,
		flex: 1,
		backgroundColor: 'white',
	},
	buttonText: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 20,
	},
	title: {
		position: 'absolute',
		top: 30,
		left: 10,
		color: 'black',
		fontSize: 30,
		fontWeight: 'bold',
	},
	button: {
		position: 'absolute',
		top: 80,
		left: 10,
		width: (SCREEN_WIDTH - 25) / 2,
		height: 55,
		borderRadius: 20,
		backgroundColor: 'gold',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	totalContanier: {
		position: 'absolute',
		top: 80,
		right: 10,
		width: (SCREEN_WIDTH - 25) / 2,
		height: 55,
		borderRadius: 20,
		backgroundColor: 'lightblue',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
export default observer(Cart);
