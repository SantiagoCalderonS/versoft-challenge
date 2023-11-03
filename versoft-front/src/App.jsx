import { useState, useEffect } from 'react'
import './App.css'
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom'
import Busqueda from './componentes/busqueda/busqueda';
import Inicio from './componentes/inicio/inicio';
import Barra from './componentes/barra/barra';
import Reporte from './componentes/reporte/reporte';
import { useDispatch } from 'react-redux';
import LandPage from './componentes/landPage/landPage';

function App() { 

  const navegar = useNavigate()
  const [ acceso , setAcceso ]= useState(false)
  const ubicacion = useLocation().pathname

  function dar_acceso (){
    
    if (acceso){
      
      navegar("/inicio")
    
    }else{
    
      setAcceso(true)
      navegar("/inicio")
    
    }

  }
  
  useEffect(()=>{
    !acceso && navegar("/")
  },[acceso])
  
  return (
    <div className='div'>
      
      {ubicacion !== "/" ? <Barra/> : ""}
    
    <Routes>
      <Route path='/' element={<LandPage prop={dar_acceso}/>}/>
      <Route path='/inicio' element={<Inicio/>}/>
      <Route path='/busqueda' element={<Busqueda/>}/>
      <Route path='/reporte/:lat/:lon/:ciudad/clima' element={<Reporte/>}/>
    </Routes>
    </div>
  )
}

export default App
