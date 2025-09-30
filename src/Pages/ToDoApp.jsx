import ToggleThemBtn from '../Component/ToggleThemBtn'
import FilterToDo from '../Component/FilterToDo'
import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { addToDo, toggleToDo, deleteToDo, reorderTodos } from '../Component/features/todosSlice'
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

export default function ToDoApp() {
    const filter = useSelector((state) => state.filter);
    const todos = useSelector((state) => state.todos);
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    const filteredTodos = todos.filter(todo => {
        if (filter === "All") return true;
        if (filter === "Active") return !todo.done;
        if (filter === "Completed") return todo.done;
    });

    function handleDragEnd(result) {
        if (!result.destination) return;
        dispatch(
            reorderTodos({
                sourceIndex: result.source.index,
                destinationIndex: result.destination.index,
            })
        );
    }

    return (
        <div className='relative w-full h-screen bg-white dark:bg-slate-900'>
            <ToggleThemBtn />
            <FilterToDo />
            <div className='absolute bg-sky-50 dark:bg-slate-800 rounded-t-[5rem] w-full min-h-full top-20'>
                <div className='flex items-center justify-between bg-gradient-to-t from-violet-500 to-fuchsia-500 h-20 px-5 md:px-10 rounded-t-[5rem] overflow-hidden text-white'>
                    <div>
                        <h1 className='font-bold text-2xl'>To Do List</h1>
                    </div>
                    <div className='flex items-center justify-center gap-x-2'>
                        <input
                            onKeyDown={(e) => {
                                if (e.key === "Enter" && text.trim()) {
                                dispatch(addToDo(text));
                                setText("");
                                }
                            }}
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            placeholder="New task..."
                            className='font-semibold text-lg pb-3 p-2 outline-none border-none rounded-md dark:bg-slate-900/30 bg-blue-50/50 w-60 h-10 transition-all'
                            type="text"
                        />
                        <div
                            onClick={() => {
                                if (text.trim()) {
                                    dispatch(addToDo(text));
                                    setText('');
                                }
                            }}
                            className='flex items-center justify-center backdrop-blur-md h-10 w-10 rounded-md bg-blue-50/50 dark:bg-slate-900/30 hover:dark:bg-slate-900/50 hover:bg-blue-50/70 cursor-pointer transition-all'
                        >
                            <span className='material-symbols-outlined'>add</span>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col items-center justify-center mx-auto gap-2 px-4 my-2'>
                    <DragDropContext onDragEnd={handleDragEnd}>
                        <Droppable droppableId="todoList">
                            {(provided) => (
                                <div
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                    className="w-full"
                                >
                                    {filteredTodos.map((todo, index) => (
                                        <Draggable key={todo.id} draggableId={String(todo.id)} index={index}>
                                            {(provided) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    className="flex items-center justify-between w-full bg-violet-500/10 h-20 px-5 md:px-10 p-4 rounded-3xl text-sky-900 dark:text-slate-400 mb-2"
                                                >
                                                    <div className="flex items-center gap-x-3 h-16">
                                                        <span
                                                            onClick={() => dispatch(toggleToDo(todo.id))}
                                                            className="material-symbols-outlined cursor-pointer transition-all"
                                                        >
                                                            {!todo.done ? "check_box_outline_blank" : "check_box"}
                                                        </span>
                                                        <p className={`${todo.done ? "line-through" : ""} text-base md:text-lg font-semibold line-clamp-2`}>
                                                            {todo.text}
                                                        </p>
                                                    </div>
                                                    <span
                                                        onClick={() => dispatch(deleteToDo(todo.id))}
                                                        className="material-symbols-outlined pl-3 cursor-pointer"
                                                    >
                                                        delete
                                                    </span>
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </DragDropContext>
                </div>
            </div>
        </div>
    );
}
