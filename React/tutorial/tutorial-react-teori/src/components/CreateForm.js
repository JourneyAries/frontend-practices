import React from 'react';
import { useState } from 'react';

const CreateForm = ({ onCreate }) => {
	const initialState = {
		nama: '',
		hobby: '',
		agama: '',
	};

	const [data, setData] = useState(initialState);
	const { nama, hobby, agama } = data;

	const handleChange = (e) => {
		//jadi begini karna biar sama kayak properti objek
		setData({ ...data, [e.target.name]: e.target.value });
	};

	const handelSubmit = (e) => {
		e.preventDefault();
		onCreate(data);
		setData(initialState);
	};

	return (
		<div>
			<form onSubmit={handelSubmit}>
				<label>Nama</label>
				<input type='text' placeholder='Masukan Nama' onChange={handleChange} value={nama} name='nama' />
				<label>Hobby</label>
				<input type='text' placeholder='Masukan Nama' onChange={handleChange} value={hobby} name='hobby' />
				<label>Agama</label>
				<input type='text' placeholder='Masukan Nama' onChange={handleChange} value={agama} name='agama' />
				<input type='submit' />
			</form>
		</div>
	);
};

export default CreateForm;
