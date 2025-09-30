import { createSlice } from "@reduxjs/toolkit";


export const todosSlice = createSlice({
    name: "todo",
    initialState: [],
    reducers: {

        addToDo: (state , action) => {
           const newTodo = ({id: Date.now().toString() , text: action.payload , done: false });
           state.push(newTodo)
           console.log(newTodo)
           console.log(newTodo.id)
        },

       toggleToDo: (state , action) => {
        const todo = state.find(todo => todo.id === action.payload);
        if (todo) {
        todo.done = !todo.done;
        }
       },

        deleteToDo: (state , action ) => {
           return state.filter(todo => todo.id !== action.payload)
        },

        reorderTodos: (state, action) => {
            const { sourceIndex, destinationIndex } = action.payload;
            const [moved] = state.splice(sourceIndex, 1);
            state.splice(destinationIndex, 0, moved);
        },

    },
})

export const { addToDo , toggleToDo , deleteToDo , reorderTodos  } = todosSlice.actions;


