// import React, { useState } from 'react'
import { createContext, useContext } from "react";
import "./App.css";
import Button from "./Components/Button";
import Header from "./Components/Header";
import TodoAdd from "./Components/TodoAdd";
import Todos from "./Components/Todos";
import TodoContext from "./utils/TodoContext";
function App() {
  const [todoGstate, setTodoGstate, isdisplay, setIsdisplay] =
    useContext(TodoContext);
  const onclick =()=>{
    setIsdisplay(!isdisplay);
  }
  return (
    <div className="app-container">
      <Button onclick={onclick}/>
      {isdisplay ? <Header /> : <Todos />}
    </div>
  );
}

export default App;
