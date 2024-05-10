import "./App.css";
import free from "./imagenes/freecodecamp-logo.png";
import Tareas from "./componentes/tareas";
import ListaDeTareas from "./componentes/listas-de-tareas"; // Cambio aquí

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className="free-logo-contenedor">
        <img src={free} className="free-logo" alt="Logo" />
      </div>
      <div className="tareas-lista-principal">
        <h1>Mis tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
