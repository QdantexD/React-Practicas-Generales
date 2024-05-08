import "./App.css";
import logo from "../src/imagenes/gaaaaaa.jpg";
import Boton from "../src/componentes/boton";
import Pantalla from "./componentes/pantalla";
import BotonClear from "./componentes/boton-clear";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState("");

  // Función para agregar un valor al input
  const agregarInput = (val) => {
    setInput(input + val);
  };

  // Función para calcular el resultado
  const calcularResultado = () => {
    if (input) {
      try {
        const resultado = evaluate(input);
        setInput(resultado.toString());
      } catch (error) {
        setInput("Error");
      }
    } else {
      alert("Por favor ingrese valores para realizar los cálculos :D");
    }
  };

  // Función para limpiar el input
  const limpiarInput = () => {
    setInput("");
  };

  return (
    <div className="App">
      <div className="free-logo-contenedor">
        <img src={logo} className="free-logo" alt="Logo de freeCodeCamp" />
      </div>
      <div className="contenedor-calculadora">
        <Pantalla input={input} />
        <div className="fila">
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear manejarClear={limpiarInput}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
