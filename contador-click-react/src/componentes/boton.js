import React from "react";

function Boton({ texto, esBotonDeClic, onClick }) {
  // Determina la clase del botón basado en el prop esBotonDeClic
  const botonClass = esBotonDeClic ? "boton-clic" : "boton-reset";

  return (
    <button className={botonClass} onClick={onClick} type="button">
      {texto}
    </button>
  );
}

export default Boton;
