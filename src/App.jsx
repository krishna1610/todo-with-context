import './App.css';
import TodoList from './TodoList';
import TodoAdd from './TodoAdd';
import React, { useState } from "react";
import { TodoContext } from './TodoContext';

function App() {
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="app-div">
      <TodoContext.Provider value={{ todoList, setTodoList }} >
        <TodoAdd />
        <TodoList />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
