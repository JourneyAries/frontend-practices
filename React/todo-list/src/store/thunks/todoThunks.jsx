import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const addTodo = createAsyncThunks('todos/add', async (todo) => {
	const response = await axios.post('http://127.0.0.1:3005/todos', todo);
	return response.data;
});

export const editTodo = createAsyncThunks('todos/edit', async (todo) => {
	const response = await axios.post(
		`http://127.0.0.1:3005/todos/${todo.id}`,
		todo,
	);
	return response.data;
});

export const deleteTodo = createAsyncThunks('todos/delete', async (id) => {
	const response = await axios.delete(`http://127.0.0.1:3005/todos/${id}`);
	return id;
});

export const fetchTodo = createAsyncThunks('todos/fetch', async () => {
	const response = await axios.get('http://127.0.0.1:3005/todos');
	return response.data;
});