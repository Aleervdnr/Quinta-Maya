import "normalize.css"
import './App.css';
import Hero from './componentes/Hero/Hero';
import Presentacion from "./componentes/Presentacion/Presentacion";
import Servicios from "./componentes/Servicios/Servicios";

function App() {
  return (
    <div className="App">
      <Hero/>
      <Presentacion/>
      <Servicios/>
    </div>
  );
}

export default App;
