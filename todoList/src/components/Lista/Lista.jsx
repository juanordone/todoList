import { useState, useEffect } from "react";

export default function Lista() {
  const [tareas, setTareas] = useState([]);
  

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

  function tachar(){
    setHecho()
    
  }

  return (
    <div>
      <h1>ToDo List</h1>
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
