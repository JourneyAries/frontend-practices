import React from 'react';
import { useState } from 'react';

const ProductEdit = ({ product, onEditProduct, cancelEdit }) => {
	const initialState = {
		nama: product.nama,
		deskripsi: product.deskripsi,
		imageURL: product.imageURL,
	};

	const [formData, setFormData] = useState(initialState);
	const { nama, deskripsi, imageURL } = formData;

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		onEditProduct(product.id, formData);
	};

	const onCancel = (e) => {
		e.preventDefault();
		cancelEdit();
	};

	return (
		<div className='product-edit'>
			<div className='edit-title'>Edit Product</div>
			<form onSubmit={handleSubmit}>
				<div className='form-group'>
					<input
						type='text'
						className='edit-input-text'
						placeholder='Nama Product'
						name='nama'
						value={nama}
						onChange={handleChange}
					/>
				</div>
				<div className='form-group'>
					<input
						type='text'
						className='edit-input-text'
						placeholder='Deskripsi Product'
						name='deskripsi'
						value={deskripsi}
						onChange={handleChange}
					/>
				</div>
				<div className='form-group'>
					<input
						type='text'
						className='edit-input-text'
						placeholder='Image Product'
						name='imageURL'
						value={imageURL}
						onChange={handleChange}
					/>
				</div>
				<input
					type='submit'
					value='Save'
					className='edit-input-submit save'
				/>
				<button
					className='edit-input-submit cancel'
					onClick={onCancel}>
					Cancel
				</button>
			</form>
		</div>
	);
};

export default ProductEdit;
