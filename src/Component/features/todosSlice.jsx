import { createSlice } from "@reduxjs/toolkit";


export const todosSlice = createSlice({
    name: "todo",
    initialState: [],
    reducers: {

        // Todo App Feature Tracking => Add new todos

        addToDo: (state , action) => {
           const newTodo = ({id: Date.now().toString() , text: action.payload , done: false });
           state.push(newTodo)
           console.log(newTodo)
           console.log(newTodo.id)
        },

        // Toggle todo completion status (done/undone) 

       toggleToDo: (state , action) => {
        const todo = state.find(todo => todo.id === action.payload);
        if (todo) {
        todo.done = !todo.done;
        }
       },

        // Todo App Feature Tracking => Delete todo

        deleteToDo: (state , action ) => {
           return state.filter(todo => todo.id !== action.payload)
        },

        // Todo App Feature Tracking => Drag & Drop reordering

        reorderTodos: (state, action) => {
            const { sourceIndex, destinationIndex } = action.payload;
            const [moved] = state.splice(sourceIndex, 1);
            state.splice(destinationIndex, 0, moved);
        },

    },
})

export const { addToDo , toggleToDo , deleteToDo , reorderTodos  } = todosSlice.actions;


