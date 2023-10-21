import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faTemperatureHigh, faWeightHanging, faDroplet, faPersonSwimming, faEarthAmerica } from '@fortawesome/free-solid-svg-icons'
import style from "./reporte.module.css"
import { useParams, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { borrar_errores, conseguir_info, borrar_info } from '../../../redux/actions'
import { Button } from 'react-bootstrap'
import Mensaje_error from '../mensaje_error/mensaje_error'
import Pantalla_de_carga from '../pantalla_de_carga/pantalla_de_carga'
import { iso31661 } from 'iso-3166'

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

        //par(info.pais)

        //____________________________________________________________________//
        setTimeout(()=>{setIsLoading(false)}, 1500)
        //esto es para que tengo un periodo de carga forzado, que hara una espera de 1.5seg para renderizar

       // return ()=> setNacion("")
    },[])

    if(isLoading) {
        return(<Pantalla_de_carga/>)
    }else{ 

        return(
        <div className={style.reporte}>
                { error.valor ? <Mensaje_error  mensaje={error.mensaje}/> : /* en caso de error carga este componente*/
            (
            <div className={style.contenedor}>
                {ciudad === "tuUbicacion"? <h1>{info.nombre}</h1> : <h1>{ciudad}</h1>}

                <div className={style.libro}>

                <div className={style.pag}>
                <img src={info.clima.iconoUrl} className={style.img}/>
                <h1>{info.clima.nombre}</h1>
                <h3>{info.clima.descripcion}</h3>
                </div>

                <div className={style.pag}>
                    <>
                    <div className={style.dato}>
                <FontAwesomeIcon icon={faEarthAmerica} className={style.icons}/>
                {info.pais? <h1>{info.pais}</h1> : <h1>Sin datos</h1>}
                </div>
                <div className={style.dato}>
                <FontAwesomeIcon icon={faClock} className={style.icons}/>
                {info.horaLocal? <h1>{info.horaLocal}</h1> : <h1>Sin datos</h1>}
                </div>
                <div className={style.dato}>
                <FontAwesomeIcon icon={faTemperatureHigh} className={style.icons}/>
                {info.datos.temperatura ? <h1> {Math.ceil(info.datos.temperatura - 272)} Grados Celsius</h1> : <h1>Sin datos</h1>}
                </div>
                <div className={style.dato}>
                <FontAwesomeIcon icon={faWeightHanging} className={style.icons}/>
                {info.datos.presion ? <h1>{info.datos.presion} Pascales</h1> : <h1>Sin datos</h1>}
                </div>
                <div className={style.dato}>
                <FontAwesomeIcon icon={faDroplet} className={style.icons}/>
                {info.datos.humedad ? <h1>Humeda:{info.datos.humedad}%</h1> : <h1>Sin datos</h1>}
                </div>
                </>
                </div>
                </div>
                <Button onClick={actualizar_info}>ACTUALIZAR</Button>
            </div>
            )
            }
        </div>
    )}
}

export default Reporte