import React, { useState } from "react";
import "../hoja-de-estilos/tarea-formulario.css";
import { v4 as uuid4 } from "uuid";

function TareasFormulario(props) {
  const [input, setInput] = useState("");

  const manejarCambio = (e) => {
    setInput(e.target.value);
    console.log(e.target.value);
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    console.log("Enviando formulario");
    const tareaNueva = {
      id: uuid4(),
      texto: input,
      completada: false,
    };
    props.onSubmit(tareaNueva);
  };

  return (
    <form className="tarea-formulario" onSubmit={manejarEnvio}>
      <input
        className="tarea-input"
        type="text"
        placeholder="Escribe una tarea"
        name="texto"
        onChange={manejarCambio}
      />
      <button className="tarea-boton">Agregar Tareas</button>
    </form>
  );
}

export default TareasFormulario;
