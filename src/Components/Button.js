import React from 'react';
import './Button.css';

function Button({ onclick }) {
  return (
    <button className="button-container" onClick={onclick}>Add</button>
  );
}

export default Button;
