import { useState } from 'react';
import './App.css';
import CreateForm from './components/CreateForm';

function App() {
	const [nama, setNama] = useState('');
	const onCreate = (data) => {
		console.log('ini console dari parent component', data);
		setNama(data.nama);
	};

	return (
		<>
			{nama}
			<CreateForm onCreate={onCreate} />
		</>
	);
}

export default App;
