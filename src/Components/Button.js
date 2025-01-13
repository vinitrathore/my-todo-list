import React, { useContext } from 'react';
import './Button.css';
import TodoContext from '../utils/TodoContext';

function Button({ onclick }) {
  const [, , isdisplay, ]=useContext(TodoContext)
  return (
    <button className="button-container" onClick={onclick}>{isdisplay?"Todos":"Add"}</button>
  );
}

export default Button;
