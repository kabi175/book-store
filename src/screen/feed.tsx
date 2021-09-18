import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BookStore, useAuthStore, useBookStore } from '../store';
import BookPreview from './components/bookPreview';
import LoadingModel from './components/loadingModel';
import DetailedView from './detailedView';

const ProductList = observer(({ bookStore }: { bookStore: BookStore }) => {
	const [productId, setProductId] = useState<string>('');
	const [isVisible, setIsVisible] = useState<boolean>(false);
	const select = (newProductId: string) => {
		setProductId(newProductId);
		setIsVisible(true);
	};
	if (bookStore.isEmpty) {
		return <LoadingModel />;
	}
	return (
		<>
			<DetailedView
				productId={productId}
				isVisible={isVisible}
				close={setIsVisible}
			/>
			{bookStore.books.map((item, id) => (
				<BookPreview key={id} product={item} select={select} />
			))}
		</>
	);
});

function Feed() {
	const authStore = useAuthStore();
	const bookStore = useBookStore();

	useEffect(() => {
		(async () => {
			await bookStore.load();
		})();
	});

	return (
		<SafeAreaView style={styles.contanier}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<Text style={styles.username}>Hi, {authStore.username}!</Text>
				<Text style={styles.title}>Books</Text>
				<ProductList bookStore={bookStore} />
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	contanier: {
		width: '100%',
		paddingHorizontal: 20,
	},
	username: {
		fontSize: 24,
		fontWeight: '900',
	},
	title: {
		fontSize: 30,
		fontWeight: 'bold',
		paddingTop: 10,
	},
});

export default observer(Feed);
