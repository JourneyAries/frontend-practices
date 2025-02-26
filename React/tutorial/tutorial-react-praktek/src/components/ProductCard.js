import React, { useState } from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import ProductEdit from './ProductEdit';

const ProductCard = ({ product, onDeleteProduct, onEditProduct }) => {
	const { id, nama, deskripsi, imageURL } = product;
	const [jumlahProduct, setJumlahProduct] = useState(0);
	const [showEdit, setShowEdit] = useState(false);
	const tambahProduct = () => {
		setJumlahProduct(jumlahProduct + 1);
	};
	const kurangProduct = () => {
		if (jumlahProduct > 0) {
			setJumlahProduct(jumlahProduct - 1);
		}
	};
	const handleSubmit = (id, data) => {
		setShowEdit(false);
		onEditProduct(id, data);
	};
	const cancelEdit = () => {
		setShowEdit(false);
	};
	return (
		<div className='card'>
			{showEdit ? (
				<ProductEdit
					product={product}
					onEditProduct={handleSubmit}
					cancelEdit={cancelEdit}
				/>
			) : (
				<>
					{' '}
					<div className='edit-delete'>
						<FaEdit
							className='icon-edit'
							onClick={() => {
								setShowEdit(!showEdit);
							}}
						/>
						<MdDeleteForever
							className='icon-delete'
							onClick={() => {
								onDeleteProduct(id);
							}}
						/>
					</div>
					<img
						style={{
							width: '100%',
							height: '200px',
							borderRadius: '10px 10px 0px 0px',
						}}
						src={imageURL}
						alt=''
					/>
					<div className='container'>
						<h4>
							<b>{nama}</b>
						</h4>
						<p>{deskripsi}</p>
						<div className={`card-keranjang ${jumlahProduct > 0 ? 'jumlah-product' : 'show-keranjang'}`}>
							{jumlahProduct > 0 ? (
								<>
									<button
										onClick={kurangProduct}
										className='button'>
										-
									</button>
									<div>{jumlahProduct}</div>
									<button
										onClick={tambahProduct}
										className='button'>
										+
									</button>
								</>
							) : (
								<div onClick={tambahProduct}>+ Keranjang</div>
							)}
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default ProductCard;
