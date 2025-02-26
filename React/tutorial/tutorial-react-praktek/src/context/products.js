import { createContext, useState } from 'react';
import {
	fetchProductsApi,
	createProductApi,
	editProductApi,
	deleteProductApi,
} from '../api/productsAPI';

const ProductContext = createContext();

function Provider({ children }) {
	const [products, setProducts] = useState([]);
	const fetchProducts = async () => {
		const response = await fetchProductsApi();
		setProducts(response.data);
	};
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

	const valueToShare = {
		products,
		fetchProducts,
		onCreateProduct,
		onDeleteProduct,
		onEditProduct,
	};

	return (
		<ProductContext.Provider value={valueToShare}>
			{children}
		</ProductContext.Provider>
	);
}

export { Provider };
export default ProductContext;
