import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import style from "./reporte.module.css"
import { useParams, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { borrar_errores, conseguir_info, borrar_info } from '../../../redux/actions'
import { Button } from 'react-bootstrap'
import Mensaje_error from '../mensaje_error/mensaje_error'
import Pantalla_de_carga from '../pantalla_de_carga/pantalla_de_carga'

const Reporte = () =>{

    const dispatch = useDispatch()

    //_____________________________________________________
    const info = useSelector(state => state.info)
    //estructura de "info"
    /*
          { nombre: string,
            zonaHoraria: number,
            pais: string,
            clima : {
                nombre : string,
                descripcion : string,
                iconoUrl: string
            },
            datos : {
                temperatura : number,
                presion : number,
                humedad : number,
                nivel_del_mar: number,
                nivel_del_suele: number
            }
          }
    */

    const error = useSelector(state => state.error_info) //info sacada del reducer
    //______________________________________________________

    const [isLoading, setIsLoading] = useState(true)
    
    const {lat, lon, ciudad} = useParams()//datos necesarios para realizar la peticion al server

    function actualizar_info (){
        dispatch(conseguir_info(lat, lon)) //para obtener info reciente
    }

    useEffect(()=>{
        dispatch(borrar_info())//limpia la info anterior antes de buscar la nueva

        dispatch(conseguir_info(lat, lon))//busca la info del servidor

        //____________________________________________________________________//
        setTimeout(()=>{setIsLoading(false)}, 1500)
        //esto es para que tengo un periodo de carga forzado, que hara una espera de 1.5seg para renderizar
    },[])

    if(isLoading) {
        return(<Pantalla_de_carga/>)
    }else{ 

        return(
        <div >
                { error ? <Mensaje_error/> : /* en caso de error carga este componente*/
            (
            <div className={style.contenedor}>
                {ciudad === "tuUbicacion" ? <h1>{info.nombre}</h1>: <h1>{ciudad}</h1>}
                <img src="https://openweathermap.org/img/wn/04d@2x.png"/>
                <FontAwesomeIcon icon={faCoffee} className={style.icons}/>
                <Button onClick={actualizar_info}>ACTUALIZAR</Button>
            </div>)
            }
        </div>
    )}
}

export default Reporte