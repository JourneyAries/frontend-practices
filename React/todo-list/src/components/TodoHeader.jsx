import { useState } from 'react';
import { useDispatch } from 'react-redux';
impor {addTodo} from '..store/thunks/todoThunks'

const TodoHeader = () => {
	const dispatch = useDispatch();
	const [todoInput, setTodoInput] = useState('');

	function handleSubmit(e) {
		e.preventDefault();
		const todo = {text: todoInput, completed: false}
		dispatch(addTodo(todo))
		setTodoInput('');
	}
	function handleChange(e) {
		setTodoInput(e.target.value);
	}

	return (
		<header>
			<h1>To Do List</h1>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					name=''
					id=''
					placeholder='Add Todo'
					value={todoInput}
					onChange={handleChange}
				/>
				<input
					type='submit'
					value='Submit'
					className='addBtn'
					id='add_button'
				/>
			</form>
		</header>
	);
};

export default TodoHeader;
