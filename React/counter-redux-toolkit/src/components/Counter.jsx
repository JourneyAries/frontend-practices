import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../store/slice/counterSlice';

const Counter = () => {
	const dispatch = useDispatch();
	const { count, countKuadrat } = useSelector((state) => {
		const kuadrat = state.counter.value * state.counter.value;
		return { count: state.counter.value, countKuadrat: kuadrat };
	});

	return (
		<div className='Container'>
			<div className='title'>
				<div onClick={() => dispatch(decrement(2))}>-</div>
				<div className='section'>
					<div>{count}</div>
				</div>
				<div className='section'>
					<div>{countKuadrat}</div>
				</div>
				<div onClick={() => dispatch(increment())}>+</div>
			</div>
		</div>
	);
};

export default Counter;
