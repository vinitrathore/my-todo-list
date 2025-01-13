// import React, { useState } from 'react'
import {  useContext } from "react";
import "./App.css";
import Button from "./Components/Button";
import Header from "./Components/Header";
// import TodoAdd from "./Components/TodoAdd";
import Todos from "./Components/Todos";
import TodoContext from "./utils/TodoContext";
function App() {
  const [, , isdisplay, setIsdisplay] =
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
