import React from "react";
import "./App.css";
import "./Hojas-de-estilos/boton.css";
import Boton from "./componentes/boton";
import freeCodeCampLogo from "./imagenes/gaaaaaa.jpg";
import Contador from "./componentes/contador";
import contador from "./Hojas-de-estilos/contador.css";
import { useState } from "react";

function App() {
  const [numClics, setNumClics] = useState(0);

  // Manejar clic del botón
  const handleClick = () => {
    setNumClics(numClics + 1);
  };

  // Reiniciar contador
  const handleReset = () => {
    setNumClics(0);
  };

  return (
    <div className="App">
      {/* Contenedor del logo de FreeCodeCamp */}
      <div className="freeCodeCampLogo-logo-contenedor">
        <img
          className="freedcodecamp-logo"
          src={freeCodeCampLogo}
          alt="Logo de FreeCodeCamp"
        />
      </div>

      {/* Contenedor principal de botones */}
      <div className="contenedor-principal">
        <Contador numClics={numClics} />
        <Boton texto="Clic" esBotonDeClic={true} onClick={handleClick} />
        <Boton texto="Reiniciar" esBotonDeClic={false} onClick={handleReset} />
      </div>
    </div>
  );
}

export default App;
