import { useState, useEffect } from "react";

export default function Lista() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState([]);

  useEffect(function () {
    async function fetchTareas() {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos`
      );
      const detalles = await response.json();
      setTareas(detalles);
    }
    fetchTareas();
  }, []);

  function eliminarTarea(id) {
    const nuevaLista = tareas.filter((tarea) => tarea.id !== id);
    setTareas(nuevaLista);
  }

  function añadirTarea(e) {
    setNuevaTarea(e.target.value);
  }

  function añadirTareaALista(e) {
    e.preventdefault();
    if (nuevaTarea == "") {
      return;
    }
    setTareas([...tareas, nuevaTarea]);
    setNuevaTarea("");
  }

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <form onSubmit={añadirTareaALista}>
        <input value={nuevaTarea} onChange={añadirTarea} />
        <button>Añadir Tarea</button>
      </form>
      <ol>
        {tareas
          .filter((item) => item.id <= 20)
          .map((tarea) => (
            <li key={tarea.id}>
              {tarea.title}{" "}
              <button onClick={() => eliminarTarea(tarea.id)}> X </button>
              <button>Tachar</button>
            </li>
          ))}
      </ol>
    </div>
  );
}
