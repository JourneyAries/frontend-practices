import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
	name: 'counter',
	initialState: {
		value: 0,
	},
	reducers: {
		increment(state) {
			state.value++;
		},
		decrement(state, action) {
			state.value = state.value - action.payload;
		},
	},
});

export const { increment, decrement } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
