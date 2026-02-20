import { useState } from "react";
import "./InputComponent.css";

function InputComponent() {
  const [texto, setTexto] = useState("");
  const [listaTareas, setListaTareas] = useState([]);

  function enviar(e) {
    e.preventDefault(e);
    if (texto === "") {
      alert("Por favor, escribe una tarea.");
      return;
    }
    const nuevaTarea = {
      id: Date.now(),
      texto: texto,
    };
    setListaTareas([...listaTareas, nuevaTarea]);
    setTexto("");
  }

  function eliminarTarea(id) {
    const nuevaLista = listaTareas.filter((tarea) => tarea.id !== id);
    setListaTareas(nuevaLista);
  }

  return (
    <div className="text-center">
      <form onSubmit={enviar}>
        <input
          type="text"
          placeholder="insertar tarea"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        ></input>
      </form>

      <div className="lista">
        <div className="contador-tareas">
          <p>Total de tareas: {listaTareas.length}</p>
        </div>
        {listaTareas.length === 0 ? (
          <p>No hay tareas por hacer</p>
        ) : (
          <ul>
            {listaTareas.map((tarea) => (
              <li key={tarea.id} className="tarea-container">
                <span>{tarea.texto}</span>
                <button
                  className="btn-eliminar"
                  onClick={() => eliminarTarea(tarea.id)}
                >
                  X
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default InputComponent;
