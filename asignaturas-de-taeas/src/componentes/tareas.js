import React from "react";
import "../hoja-de-estilos/tareas.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

function Tareas({ id, texto, completada, completarTarea, eliminarTarea }) {
  return (
    <div
      className={
        completada ? "tarea-contenedor completada" : "tarea-contenedor"
      }
    >
      <div className="tarea-texto" onClick={() => completarTarea(id)}>
        {texto}
      </div>
      <div className="tarea-contenedor-icono" onClick={() => eliminarTarea(id)}>
        <AiOutlineCloseCircle className="tarea-icono" />
      </div>
    </div>
  );
}

export default Tareas;
