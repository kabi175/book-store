import { observer } from 'mobx-react-lite';
import React from 'react';
import { View, Text, Pressable, Image, StyleSheet } from 'react-native';
import { Icon, Tile } from 'react-native-elements';
import { useCartStore } from '../../store';
import { trimTitle } from '../../util';

interface CartPreviewCardProp {
	product: Product;
}

function CartPreviewCard({ product }: CartPreviewCardProp) {
	const cartStore = useCartStore();
	const { id, imageUri, title, price } = product;
	const trimedTitle = trimTitle(title);

	return (
		<Pressable>
			<View style={styles.contanier}>
				<Image style={styles.image} source={{ uri: imageUri }} />
				<View style={styles.desp}>
					<Text style={styles.title}>{trimedTitle}</Text>
					<View style={styles.delete}>
						<Pressable onPress={() => cartStore.removeById(id)}>
							<Icon name='trash' type='font-awesome' />
						</Pressable>
					</View>
				</View>
				<Text style={styles.price}>Rs {price}</Text>
			</View>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	contanier: {
		flex: 1,
		flexDirection: 'row',
		margin: 5,
		paddingTop: 25,
		width: '100%',
		height: 100,
	},
	image: { width: 100, height: 100, marginRight: 5 },
	desp: {
		padding: 5,
		paddingRight: 10,
	},
	title: { fontSize: 16, fontWeight: '800', width: 200 },
	price: { position: 'absolute', fontSize: 18, bottom: 15, right: 15 },
	delete: {
		position: 'relative',
		right: 85,
		top: 10,
	},
});
export default observer(CartPreviewCard);
