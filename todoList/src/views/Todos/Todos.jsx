import { useState, useEffect } from "react";
import Formulario from "../../components/Formulario/Formulario";

import Lista from "../../components/Lista/Lista";

export default function Todos() {
  const [todos, setTodos] = useState(null);
  const [nuevaTarea, SetNuevaTarea] = useState("");

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

  function añadirNuevaTarea(e) {
    SetNuevaTarea(e.target.value);
  }

  function añadirTareaALaLista(e) {
    e.preventDefault();
    if (nuevaTarea === "") {
      return;
    }

    
      setTodos([
        ...todos,
         
        { userId: todos.length, id: todos.length + 1, title: nuevaTarea, completed: false },
      ]);
      SetNuevaTarea("");
      
    
    console.log(todos);
  }
  return (
    <>
      <h1>Lista de tareas</h1>
      {/* <Formulario items={todos} setState={setTodos} /> */}
      <form onSubmit={añadirTareaALaLista}>
        <input value={nuevaTarea} onChange={añadirNuevaTarea} />
        <br/>
        <button className="btn btn-danger">Añadir tarea</button>
      </form>
      <Lista  items={todos} setState={setTodos} />
    </>
  );
}
