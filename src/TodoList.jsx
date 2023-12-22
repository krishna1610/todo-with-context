import React, { useContext } from "react";
import {TodoContext} from  './TodoContext';

const TodoList = () => {
    const {todoList, setTodoList} = useContext(TodoContext);

    const deleteTodo = (index) => {
        const copyTodos = [...todoList];
        copyTodos.splice(index, 1)
        setTodoList(copyTodos);
    };

    return(<div>
    <ul>
        {todoList?.map((item, index) => {
            return <li key={index}>{item} <button onClick={() => deleteTodo(index)}>Delete</button></li>
        })}
    </ul>
    </div>)
}

export default TodoList;
