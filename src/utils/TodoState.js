import React, { useEffect, useState } from "react";
import TodoContext from "./TodoContext";

const TodoStates = ({ children }) => {
  const [todoGstate, setTodoGstate] = useState([]);
  const [isdisplay, setIsdisplay] = useState(false);

  // Fetch data from localStorage
  const getData = () => {
    const data = localStorage.getItem("todos"); // Retrieve data as a string
    if (data) {
      setTodoGstate(JSON.parse(data)); // Parse and set state if data exists
    }
  };

 // Save data to localStorage
const setData = () => {
    if (todoGstate.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todoGstate)); // Stringify and save only if not empty
    }
  };
  
  // Save data whenever `todoGstate` changes
  useEffect(() => {
    setData();
  }, [todoGstate]);

  // Load data on component mount
  useEffect(() => {
    getData();
  }, []);

  return (
    <TodoContext.Provider value={[todoGstate, setTodoGstate, isdisplay, setIsdisplay]}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoStates;
