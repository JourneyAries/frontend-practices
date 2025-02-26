import './App.css';
import ProductList from './components/ProductList';
import { useState, useEffect } from 'react';
import ProductCreate from './components/ProductCreate';
import axios from 'axios';
import {
	fetchProductsApi,
	createProductApi,
	editProductApi,
	deleteProductApi,
} from './api/productsAPI';

function App() {
	const [products, setProducts] = useState([]);
	const fetchProducts = async () => {
		const response = await fetchProductsApi();
		setProducts(response.data);
	};
	useEffect(() => {
		fetchProducts();
	}, []);
	const onCreateProduct = async (product) => {
		const response = await createProductApi(product);

		setProducts([...products, response.data]);
	};

	const onDeleteProduct = async (id) => {
		await deleteProductApi(id);
		const updatedProduct = products.filter((product) => {
			return product.id !== id;
		});
		setProducts(updatedProduct);
	};

	const onEditProduct = async (id, data) => {
		const response = await editProductApi(id, data);
		const updatedProducts = products.map((product) => {
			if (product.id === id) {
				return { ...product, ...response.data };
			}
			return product;
		});
		setProducts(updatedProducts);
	};
	return (
		<>
			<div className='app-title'>Belanja Mobil</div>
			<ProductCreate onCreateProduct={onCreateProduct} />
			<ProductList
				products={products}
				onDeleteProduct={onDeleteProduct}
				onEditProduct={onEditProduct}
			/>
		</>
	);
}

export default App;
