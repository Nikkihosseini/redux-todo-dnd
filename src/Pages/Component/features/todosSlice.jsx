import { createSlice } from "@reduxjs/toolkit";


export const todosSlice = createSlice({
    name: todo,
    initialState: [],
    reducers: {

        addToDo: (state , action) => {
            state.push({id: Date.now().toString() , text: action.payload , done: false });
        },

        toggleToDo: (state , action) => {
            const todo = state.find(todo => todo.id === action.payload)
            todo?todo.done:!todo.done
        },

        deleteToDo: (state , action ) => {
            state.filter(todo => todo.id !== action.payload)
        },

        reorderTodos: (state, action) => {
            const { sourceIndex, destinationIndex } = action.payload;
            const [moved] = state.splice(sourceIndex, 1);
            state.splice(destinationIndex, 0, moved);
        },

    },
})


