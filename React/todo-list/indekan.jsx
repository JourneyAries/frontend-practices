import {configure} from '@testing-library/react';
import {todoReducer} from './slices/todoSlice';
import {configureStore) from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    todos: todoReducer
  }
})

export {store}