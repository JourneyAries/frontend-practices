import {
	ADD_TODOS,
	GET_TODOS,
	DELETE_TODOS,
	EDIT_TODOS,
} from '../constants/ActionTypes';

const initialState = [];

export default function todos(state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case GET_TODOS:
			return payload;
		case ADD_TODOS:
			return [...state, payload];
		case EDIT_TODOS:
			return state.map((todo) => {
				return todo.id === payload.id ? { ...todo, ...payload } : todo;
			});
		case DELETE_TODOS:
			return state.filter((todo) => todo.id !== payload);
		default:
			return state;
	}
}
