import { createSlice } from '@reduxjs/toolkit';
import {
	addTodo,
	editTodo,
	fetchTodo,
	deleteTodo,
} from './src/store/thunks/todoThunks';

const todosSlice = createSlide({
	name: 'todos',
	initialState: {
		data: [],
	},
	extraReducers(builder) {
		builder.addCase(fetchTodos.fulfilled, (state, action) => {
			state.data = action.payload;
		});
		builder.addCase(fetchTodos.pending, (state, action) => {
			console.log('fetch/todos pending');
		});
		builder.addCase(fetchTodos.rejected, (state, action) => {
			console.log('fetch/todos rejected');
		});

		// case lainnya
		builder.addCase(addTodo.fulfilled, (state, action) => {
			state.data.push(action.payload);
		});
		builder.addCase(editTodo.fulfilled, (state, action) => {
			state.data = state.data.map((todo) => {
				if (todo.id === action.payload.id) {
					return { ...todo, ...action.payload };
				}
				return todo;
			});
		});
		builder.addCase(deleteTodo.fulfilled, (state, action) => {
			state.data = state.data.filter((todo) => {
				return todo.id !== action.payload;
			});
		});
	},
});

export const todoReducer = todosSlice.reducer;
