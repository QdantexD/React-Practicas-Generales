import React, { useState } from "react";
import TareasFormulario from "./tarea-formulario";
import "../hoja-de-estilos/listas-de-tareas.css";
import Tareas from "../componentes/tareas";

function ListaDeTareas() {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (tarea) => {
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();

      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    }
  };

  const completarTarea = (id) => {
    const tareasActualizadas = tareas.map((tarea) => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  };

  const eliminarTarea = (id) => {
    const tareasActualizadas = tareas.filter((tarea) => tarea.id !== id);
    setTareas(tareasActualizadas);
  };

  return (
    <>
      <TareasFormulario onSubmit={agregarTarea} />
      <div className="tareas-lista-contenedor">
        {tareas.map((tarea) => (
          <Tareas
            key={tarea.id}
            id={tarea.id}
            texto={tarea.texto}
            completada={tarea.completada}
            completarTarea={() => completarTarea(tarea.id)}
            eliminarTarea={() => eliminarTarea(tarea.id)}
          />
        ))}
      </div>
    </>
  );
}

export default ListaDeTareas;
