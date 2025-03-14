// import React from 'react';
import { GrClose } from 'react-icons/gr';
import { editTodo, deleteTodo } from '../store/thunks/todoThunks';
import { useDispatch } from 'react-redux';

const TodoItem = ({ todo }) => {
	function handleEdit() {
		const editedTodo = { ...todo, completed: !todo.completed };
		dispatchEvent(editTodo(editedTodo));
	}
	return (
		<li className={`todo-item ${todo.completed ? 'checked' : ''}`}>
			<div
				className='todo-text'
				onClick={handleEdit}>
				{todo.text}
			</div>
			<div
				className='todo-delete'
				onClick={() => dispatchEvent(deleteTodo(todo.id))}>
				<GrClose />
			</div>
		</li>
	);
};

export default TodoItem;
