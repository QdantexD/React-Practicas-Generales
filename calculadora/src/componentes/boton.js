import React from "react";
import "../hoja-de-estilos/boton.css";

function Boton(props) {
  const esOperador = (valor) => {
    return isNaN(valor) && valor !== "." && valor !== "=";
  };

  return (
    <div
      className={`boton-contenedor ${
        esOperador(props.children) ? "operador" : ""
      }`}
      onClick={() => props.manejarClick(props.children)}
    >
      {props.children}
    </div>
  );
}

export default Boton;
