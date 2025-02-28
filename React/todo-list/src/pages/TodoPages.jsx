// import React from 'react';
import { useState, useEffect } from 'react';
import TodoHeader from '../components/TodoHeader';
import TodoList from '../components/TodoList';
import {
	fetchTodosApi,
	createTodosApi,
	deleteTodosApi,
	editTodosApi,
} from '../api/TodosApi';

const TodoPages = () => {
	const [todos, setTodos] = useState([]);

	async function fetchTodos() {
		const response = await fetchTodosApi();
		setTodos(response.data);
	}
	async function createTodo(text) {
		const todo = { text: text, completed: false };
		const response = await createTodosApi(todo);
		setTodos([...todos, response.data]);
	}

	async function editTodo(data) {
		const editedTodo = { ...data, completed: !data.completed };
		const response = await editTodosApi(data.id, editedTodo);
		const updatedTodos = todos.map((todo) => {
			if (todo.id === data.id) {
				return { ...todo, ...response.data };
			}
			return todo;
		});
		setTodos(updatedTodos);
	}

	async function deleteTodo(id) {
		await deleteTodosApi(id);
		const updatedTodo = todos.filter((todo) => {
			return todo.id !== id;
		});
		setTodos(updatedTodo);
	}

	useEffect(() => {
		fetchTodos();
	}, []);

	return (
		<div>
			<TodoHeader addTodo={createTodo} />
			<TodoList
				todos={todos}
				editTodo={editTodo}
				deleteTodo={deleteTodo}
			/>
		</div>
	);
};

export default TodoPages;
