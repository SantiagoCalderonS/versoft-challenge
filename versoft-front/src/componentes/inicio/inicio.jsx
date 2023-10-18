import Reporte from "../reporte/reporte"
import { useDispatch, useSelector } from "react-redux"
import { useState, useEffect } from "react"
import { conseguir_info, info_usuario } from "../../../redux/actions"
import { Link } from "react-router-dom"

const Inicio = () =>{
    
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    const funcionInit = () => {//funcion sacada de internet que obtiene los datos actuales de la ubicacion del usuario
        if (!"geolocation" in navigator) {
          return alert("Tu navegador no soporta el acceso a la ubicación. Intenta con otro");
        }
      
        const onUbicacionConcedida = ubicacion => { //funcion que recibira un objeto con la info de la ubicacion actual
          console.log("Tengo la ubicación: ", ubicacion);
          dispatch(info_usuario({latitud:ubicacion.coords.latitude , longitud: ubicacion.coords.longitude}))
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

    return(
    <div>
        <button onClick={funcionInit}>dar posicion</button>
        {user.latitud && <Link to={`/reporte/${user.latitud}/${user.longitud}/clima`} ><button>obtener reporte</button></Link>}
    </div>
    )
}

export default Inicio