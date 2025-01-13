import React, { useContext } from 'react';
import './Button.css';
import TodoContext from '../utils/TodoContext';

function Button({ onclick }) {
  const [, , isdisplay, ]=useContext(TodoContext)
  return (
    // <div className="buttton-contained">
      <button className="button-container" onClick={onclick}>{isdisplay?"Todos":"Add"}</button>

    // </div>
  );
}

export default Button;
