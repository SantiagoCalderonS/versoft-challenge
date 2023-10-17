import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Busqueda from './componentes/busqueda/busqueda';
import Inicio from './componentes/inicio/inicio';
import Barra from './componentes/barra/barra';
import "./App.css"

function App() { 
  
  const funcionInit = () => {//funcion sacada de internet que obtiene los datos actuales de la ubicacion del usuario
    if (!"geolocation" in navigator) {
      return alert("Tu navegador no soporta el acceso a la ubicación. Intenta con otro");
    }
  
    const onUbicacionConcedida = ubicacion => { //funcion que recibira un objeto con la info de la ubicacion actual
      console.log("Tengo la ubicación: ", ubicacion);
    }
    
    const onErrorDeUbicacion = err => { // funcion que maneja errores
      console.log("Error obteniendo ubicación: ", err);//da error si se le niega el acceso a la ubicacion
    }
  
    const opcionesDeSolicitud = {
      enableHighAccuracy: true, // Alta precisión
      maximumAge: 0, // No queremos caché
      timeout: 5000 // Esperar solo 5 segundos
    };
    // Solicitar
    navigator.geolocation.getCurrentPosition(onUbicacionConcedida, onErrorDeUbicacion, opcionesDeSolicitud);
  
  };

  return (
    <>
    <button onClick={funcionInit}>dar</button>
    <Barra/>
    <Routes>
      <Route path='/inicio' element={<Inicio/>}/>
      <Route path='/busqueda' element={<Busqueda/>}/>
    </Routes>
    </>
  )
}

export default App
