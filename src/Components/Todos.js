import React, { useContext } from "react";
import "./todos.css";
import TodoContext from "../utils/TodoContext";

function Todos() {
  const [todoGstate, setTodoGstate] = useContext(TodoContext);

  const removeTodo = (id) => {
    const remaindata = todoGstate.filter((item) => item.id !== id);
    setTodoGstate(remaindata);
  };

  const counter = (id) => {
    const updatedTodos = todoGstate.map((todo) => {
      if (todo.id === id) {
        return { ...todo, count: todo.count + 1 };
      }
      return todo;
    });
    setTodoGstate(updatedTodos);
  };

  const resetCounter = (id) => {
    const updatedTodos = todoGstate.map((todo) => {
      if (todo.id === id) {
        return { ...todo, count: 0 };
      }
      return todo;
    });
    setTodoGstate(updatedTodos);
  };

  return (
    <>
      <div className="todos-header">
        <h1>TODOS</h1>
      </div>
      {todoGstate.map((item) => (
        <div className="todo-sub-header" key={item.id}>
          <div className="row">
            <h2>Id</h2>
            <h3 onClick={() => resetCounter(item.id)}>{item.id}</h3>
          </div>
          <div>
            <h2>Title</h2>
            <h3 className="title">{item.title}</h3>
          </div>
          <div>
            <h2>SubTitle</h2>
            <h3 className="subtitle">{item.subtitle}</h3>
          </div>
          <div>
            <h2>Start-Time</h2>
            <h3>{new Date(item.startTime).toLocaleString()}</h3>
          </div>
          <div>
            <h2>End-Time</h2>
            <h3>{new Date(item.endTime).toLocaleString()}</h3>
          </div>
          <div>
            <h2>Count</h2>
            <h3 className="count" onClick={() => counter(item.id)}>
              {item.count}
            </h3>
          </div>
          <div>
            <h3 className="delete" onClick={() => removeTodo(item.id)}>
              Delete
            </h3>
          </div>
        </div>
      ))}
    </>
  );
}

export default Todos;
