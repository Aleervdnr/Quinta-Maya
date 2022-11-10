import React,{Suspense,lazy} from "react";
import "normalize.css"
import './App.css';

import Footer from "./componentes/Footer/Footer";
import Hero from './componentes/Hero/Hero';
const Presentacion = lazy(() => import("./componentes/Presentacion/Presentacion"))
const Servicios = lazy(() => import("./componentes/Servicios/Servicios"))
const Galeria = lazy(() => import("./componentes/Galeria/Galeria"))
const Contacto = lazy(() => import("./componentes/Contacto/Contacto"))

function App() {
  return (
    <div className="App">
      <Hero/>
      <Suspense>
        <Presentacion/>
      </Suspense>

      <Suspense>
        <Servicios/>
      </Suspense>

      <Suspense>
        <Galeria/>
      </Suspense>
      <Suspense>
        <Contacto/>
      </Suspense>
      <Footer/>
    </div>
  );
}

export default App;
