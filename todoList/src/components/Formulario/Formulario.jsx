import { useState } from "react";

export default function Formulario(items, setState) {
  

  
  return (
    <>
      <form onSubmit={añadirTareaALaLista}>
        <input value={nuevaTarea} onChange={añadirNuevaTarea} />
        <button>Añadir tarea</button>
      </form>
    </>
  );
}
