import "normalize.css"
import './App.css';
import Contacto from "./componentes/Contacto/Contacto";
import Galeria from "./componentes/Galeria/Galeria";
import Hero from './componentes/Hero/Hero';
import Presentacion from "./componentes/Presentacion/Presentacion";
import Servicios from "./componentes/Servicios/Servicios";

function App() {
  return (
    <div className="App">
      <Hero/>
      <Presentacion/>
      <Servicios/>
      <Galeria/>
      <Contacto/>
    </div>
  );
}

export default App;
