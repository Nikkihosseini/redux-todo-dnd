import {todosSlice} from '../features/todosSlice'
import {filterSlice} from '../features/filterSlice'
import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({
  reducer: {
    todos: todosSlice.reducer,
    filter: filterSlice.reducer,
  },
});
