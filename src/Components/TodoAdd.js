import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./todoAdd.css";
import TodoContext from "../utils/TodoContext";
import { updtlclstrg } from "../utils/Func";

function TodoAdd() {
  const [todoGstate] = useContext(TodoContext);
  const [todoname, setTodoname] = useState("");
  const [subtitle, setsubtitle] = useState("");
  const [startTime, setstartTime] = useState(null);
  const [endTime, setendTime] = useState(null);

  const onadd = () => {
    const newItem = {
      id: todoGstate.length + 1,
      title: todoname,
      subtitle: subtitle,
      count: 0,
      startTime,
      endTime,
    };
    if (todoname) {
      // setTodoGstate()
      todoGstate.push(newItem);
      if (todoGstate) {
        const existingTodos = JSON.parse(localStorage.getItem("todos") || "[]"); // Parse existing todos
        const updatedTodos = [...existingTodos, newItem]; // Append new item
        updtlclstrg(updatedTodos, "todos"); // Update localStorage
      } else {
        updtlclstrg([newItem], "todos"); // Save new array if empty
      }
      
      setTodoname("");
      setsubtitle("");
      setstartTime(null);
      setendTime(null);
    }
  };

  return (
    <div className="todo-add-container">
      <input
        className="todo-input-title"
        type="text"
        value={todoname}
        onChange={(e) => setTodoname(e.target.value)}
        placeholder="Add your task here..."
      />
      <input
        type="text"
        className="todo-input-subtitle"
        value={subtitle}
        placeholder="Add your subtitle"
        onChange={(e) => setsubtitle(e.target.value)}
      />
      <div className="date-container">
        <div className="todo-start-time">
          <h3>Start Date and Time</h3>
          <DatePicker
            selected={startTime}
            onChange={(date) => setstartTime(date)}
            showTimeSelect
            dateFormat="Pp"
          />
        </div>
        <div className="todo-end-time">
          <h3>End Date and Time</h3>
          <DatePicker
            selected={endTime}
            onChange={(date) => setendTime(date)}
            showTimeSelect
            dateFormat="Pp"
          />
        </div>
      </div>
      <button className="todo-btn" onClick={onadd}>
        Add
      </button>
      {/* <p>{JSON.stringify(todoGstate)}</p> */}
    </div>
  );
}

export default TodoAdd;
