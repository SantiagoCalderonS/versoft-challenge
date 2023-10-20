import Reporte from "../reporte/reporte"
import { useDispatch, useSelector } from "react-redux"
import { useState, useEffect } from "react"
import { info_usuario, sin_info_usuario } from "../../../redux/actions"
import { Link } from "react-router-dom"
import Mensaje_error from "../mensaje_error/mensaje_error"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import style from "./inicio.module.css"

const Inicio = () =>{//pagina inicial de la pagina, aqui podra ver el clima de su ubicacion actual

  //___________info sacada del reducer___________________________
    const user = useSelector(state => state.user)
    const error = useSelector(state => state.error_user)
  //_______________________________________________________________

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
          dispatch(sin_info_usuario())
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
    <div className={style.contenedor}>
        {!user.latitud && !error? <button onClick={funcionInit}><FontAwesomeIcon icon={faMagnifyingGlass}/></button>: //este boton solo aparece si no existe info del usuario o algun error
        (<div>
          {error? <Mensaje_error/>://si exite error aparece el mensaje, si no da un link al "reporte" de tu ubicacion actual
          <Link to={`/reporte/${user.latitud}/${user.longitud}/tuUbicacion/clima`} ><button>obtener reporte</button></Link>}
        </div>)}
    </div>
    )
}

export default Inicio