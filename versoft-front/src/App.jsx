import { useState, useEffect } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Busqueda from './componentes/busqueda/busqueda';
import Inicio from './componentes/inicio/inicio';
import Barra from './componentes/barra/barra';
import Reporte from './componentes/reporte/reporte';
import { useDispatch } from 'react-redux';

function App() { 
  

  return (
    <div>
    <Barra/>
    <Routes>
      <Route path='/inicio' element={<Inicio/>}/>
      <Route path='/busqueda' element={<Busqueda/>}/>
      <Route path='/reporte/:lat/:lon/:ciudad/clima' element={<Reporte/>}/>
    </Routes>
    </div>
  )
}

export default App
