import React, { useContext } from "react";
import "./todos.css";
import TodoContext from "../utils/TodoContext";

function Todos() {
  const [todoGstate, setTodoGstate] = useContext(TodoContext);

  // Update localStorage directly
  const updateLocalStorage = (updatedTodos) => {
    setTodoGstate(updatedTodos); // Update state
    localStorage.setItem("todos", JSON.stringify(updatedTodos)); // Update localStorage
  };

  const removeTodo = (id) => {
    const remaindata = todoGstate.filter((item) => item.id !== id);
    updateLocalStorage(remaindata); // Update state and localStorage
  };

  const counter = (id) => {
    const updatedTodos = todoGstate.map((todo) => {
      if (todo.id === id) {
        return { ...todo, count: todo.count + 1 };
      }
      return todo;
    });
    updateLocalStorage(updatedTodos); // Update state and localStorage
  };

  const resetCounter = (id) => {
    const updatedTodos = todoGstate.map((todo) => {
      if (todo.id === id) {
        return { ...todo, count: 0 };
      }
      return todo;
    });
    updateLocalStorage(updatedTodos); // Update state and localStorage
  };

  return (
    <>
      <div className="todos-header">
        <h1>TODOS</h1>
      </div>
      {todoGstate.map((item) => (
        <div className="todo-sub-header" key={item.id}>
          <div className="row">
            <h2>Id      /    Reset</h2>
            <h3 onClick={() => resetCounter(item.id)}>{item.id}</h3>
          </div>
          <div className="row">
            <h2>Title</h2>
            <h3 className="title">{item.title}</h3>
          </div>
          <div className="row">
            <h2>SubTitle</h2>
            <h3 className="subtitle">{item.subtitle}</h3>
          </div>
          <div className="row">
            <h2>Start-Time</h2>
            <h3>{new Date(item.startTime).toLocaleString()}</h3>
          </div>
          <div className="row">
            <h2>End-Time</h2>
            <h3>{new Date(item.endTime).toLocaleString()}</h3>
          </div>
          <div className="row">
            <h2>Count</h2>
            <h3 className="count" onClick={() => counter(item.id)}>
              {item.count}
            </h3>
          </div>
          {/* <div className="row"> */}
            <h3 className="delete" onClick={() => removeTodo(item.id)}>
              Delete
            </h3>
          {/* </div> */}
        </div>
      ))}
    </>
  );
}

export default Todos;
