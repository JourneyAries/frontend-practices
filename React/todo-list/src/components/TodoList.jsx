// import React from 'react';
import { useEffect } from 'react';
import TodoItem from '../containers/TodoItem';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from '../store/thunks/todoThunks';

const TodoList = () => {
	const dispatch = useDispatch();
	const todos = useSelector((state) => {
		return state.todos.data;
	});
	useEffect(() => {
		fetchTodos();
	}, []);
	return (
		<ul className='todo-list'>
			{todos.map((todo) => {
				return (
					<TodoItem
						key={todo.id}
						todo={todo}
					/>
				);
			})}
		</ul>
	);
};

export default TodoList;
