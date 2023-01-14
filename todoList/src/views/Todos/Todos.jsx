import { useState, useEffect } from "react";

import Lista from "../../components/Lista/Lista";

export default function Todos() {
  const [todos, setTodos] = useState(null);

  useEffect(function () {
    async function fetchTodos() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();
      setTodos(data.slice(0, 20));
    }
    fetchTodos();
  }, []);
  return (
    <>
      <h1>Lista de tareas</h1>
      <Lista items={todos} setState={setTodos} />
    </>
  );
}
