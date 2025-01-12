// import React from 'react'
import { useContext } from 'react';
import "./header.css";
import TodoAdd from './TodoAdd';
// import TodoContext from '../utils/TodoContext';
function Header() {
  // const [todoGstate, setTodoGstate] = useContext(TodoContext);

  return (
    <>
    
    <div className='header-container'>
        <h1>My Todos</h1>

    </div>
    <TodoAdd/>
    </>
  )
}

export default Header