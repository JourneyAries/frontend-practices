import './App.css';
import ProductList from './components/ProductList';
import { useState, useEffect } from 'react';
import ProductCreate from './components/ProductCreate';
import axios from 'axios';

function App() {
	const [products, setProducts] = useState([]);
	const fetchProducts = async () => {
		const response = await axios.get('http://127.0.0.1:3005/products');
		setProducts(response.data);
	};
	useEffect(() => {
		fetchProducts();
	}, []);
	const onCreateProduct = async (product) => {
		const response = await axios.post(
			'http://127.0.0.1:3005/products',
			product,
		);

		setProducts([...products, response.data]);
	};

	const onDeleteProduct = async (id) => {
		await axios.delete(`http://127.0.0.1:3005/products/${id}`);
		const updatedProduct = products.filter((product) => {
			return product.id !== id;
		});
		setProducts(updatedProduct);
	};

	const onEditProduct = async (id, data) => {
		const response = await axios.put(
			`http://127.0.0.1:3005/products/${id}`,
			data,
		);
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
