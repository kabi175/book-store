import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { useCartStore } from '../../store';
import { trimTitle } from '../../util';
import { Icon } from 'react-native-elements';

interface BookPreviewProps {
	product: Product;
	select: (prodictId: string) => void;
}

export default function BookPreview({ product, select }: BookPreviewProps) {
	const cartStore = useCartStore();
	const { id, imageUri, title, price } = product;
	const trimedTitle = trimTitle(title);

	return (
		<Pressable style={styles.contanier} onPress={() => select(id)}>
			<Image style={styles.image} source={{ uri: imageUri }} />
			<View style={styles.desp}>
				<Text style={styles.title}>{trimedTitle}</Text>
				{price ? <Text style={styles.price}>Rs {price}</Text> : null}
			</View>
			{price ? (
				<Pressable onPress={() => cartStore.add(product)}>
					<Icon
						name='plus'
						type='font-awesome'
						color='orange'
						size={20}
					/>
				</Pressable>
			) : (
				<Icon name='plus' type='font-awesome' color='gray' size={20} />
			)}
		</Pressable>
	);
}
const styles = StyleSheet.create({
	contanier: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		margin: 5,
		width: '100%',
		height: 100,
	},
	image: { width: 100, height: 100, marginRight: 5 },
	desp: {
		padding: 5,
		paddingRight: 10,
	},
	title: { fontSize: 16, fontWeight: '800', width: 200 },
	price: { fontSize: 18 },
	addToCart: { fontSize: 30 },
});
