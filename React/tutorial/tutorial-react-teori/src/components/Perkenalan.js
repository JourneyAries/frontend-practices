const Perkenalan = (props) => {
	const handleClick = (nama) => {
		console.log('click ' + nama);
	};
	return (
		<div>
			<div>Nama saya adalah {props.nama}</div>
			<div>Hobby saya bermain {props.hobby}</div>
			<button onClick={() => handleClick(props.nama)}>klik ini</button>
		</div>
	);
};

export default Perkenalan;
