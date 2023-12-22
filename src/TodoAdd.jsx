import React, { useState, useContext } from "react";
import { TodoContext } from  './TodoContext';

const TodoAdd = () => {
    const {todoList, setTodoList} = useContext(TodoContext);
    const [todo, setTodo] = useState('');

    const addItem = () => {
        setTodoList([...todoList, todo]);
        setTodo('');
    };

    return(<div>
    <h1>Todo List</h1>
    <h3>{`Total Todos: ${todoList.length}`}</h3>
    <input type="text" value={todo} onChange={(e)=>{setTodo(e.target.value)}}></input>
    <button onClick={addItem}>Add</button>
    </div>)
};

export default TodoAdd;
