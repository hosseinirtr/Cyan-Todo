import React, { useEffect, useState } from "react";
import { getTodos } from "../services/getTodos";

export default function List() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos().then((data) => {
      setTodos(data);
    });
  }, []);

  return (
    <div>
      <ul>
        {todos && todos.map((item, index) => <li key={index}>{item.title}</li>)}
      </ul>
    </div>
  );
}
