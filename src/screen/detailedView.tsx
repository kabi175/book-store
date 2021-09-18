import React from 'react';
import {
	Text,
	StyleSheet,
	Image,
	Pressable,
	Modal,
	View,
	ScrollView,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { useBookStore, useCartStore } from '../store';

interface DetailedViewProp {
	productId: string;
	isVisible: boolean;
	close: (arg0: boolean) => void;
}

export default function DetailedView({
	productId,
	isVisible,
	close,
}: DetailedViewProp) {
	const bookStore = useBookStore();
	const cartStroe = useCartStore();
	const book = bookStore.findBookById(productId);
	if (!book) {
		return <></>;
	}
	const handleAddToCart = () => {
		cartStroe.add(book);
	};
	const { title, description, price, imageUri } = book;
	return (
		<Modal visible={isVisible}>
			<ScrollView>
				<View style={styles.contanier}>
					<View style={styles.back}>
						<Icon
							style={styles.back}
							name='arrow-left'
							type='font-awesome'
							color='black'
							onPress={() => close(false)}
						/>
					</View>
					<Image style={styles.image} source={{ uri: imageUri }} />
					<Text style={styles.title}>{title}</Text>

					{isNaN(price) ? null : (
						<Text style={styles.price}>Rs {price}</Text>
					)}
					<Text style={styles.desp}>{description}</Text>
					{isNaN(price) ? null : (
						<Pressable style={styles.add} onPress={handleAddToCart}>
							<Text
								style={{
									color: 'white',
									fontWeight: 'bold',
									fontSize: 16,
								}}
							>
								Add to Cart
							</Text>
						</Pressable>
					)}
				</View>
			</ScrollView>
		</Modal>
	);
}
const styles = StyleSheet.create({
	contanier: {
		flex: 1,
		alignItems: 'center',
		marginHorizontal: 25,
	},
	back: {
		position: 'relative',
		top: 20,
		left: -165,
		paddingBottom: 30,
	},
	image: {
		width: 250,
		height: 250,
	},
	title: {
		width: 250,
		fontSize: 18,
		fontWeight: '800',
		textAlign: 'center',
		paddingVertical: 30,
	},
	price: {
		fontSize: 28,
		color: 'gray',
		fontWeight: 'bold',
		paddingBottom: 30,
	},
	desp: {
		fontSize: 16,
		fontWeight: '800',
		textAlign: 'center',
	},
	add: {
		flex: 0,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 30,
		backgroundColor: 'black',
		width: '80%',
		padding: 5,
		marginTop: 30,
		marginBottom: 30,
	},
});
