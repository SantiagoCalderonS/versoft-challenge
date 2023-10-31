import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { conseguir_municipios, borrar_errores } from "../../../redux/actions"
import {iso31661} from 'iso-3166';
import Resultados from "../resultados/resultados";
import style from "./busqueda.module.css";
import Mensaje_error from "../mensaje_error/mensaje_error";
import Pantalla_de_carga from "../pantalla_de_carga/pantalla_de_carga";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap } from "@fortawesome/free-solid-svg-icons";

const Busqueda = () =>{

    const dispatch = useDispatch()

    //____________info del reducer______________________________
    const municipios = useSelector(state => state.municipios)
    const error = useSelector(state => state.error_municipios)

    //___________________estados locales____________________________________
    const [sitio, setSitio] = useState({
        ciudad: 0,
        pais: 0
    })
    const [isLoading, setIsLoading] = useState(true)
    const [show, setShow] = useState(false)

    function contener_info (event){//funcion para guardar los datos necesarios para la busqueda
        const name = event.target.name;
        const value = event.target.value

        //_______para recetear los valores del estado local mientras se escribe la proxima zona a buscar__________________________
        setIsLoading(true)
        setShow(false)
        //__________________________________

        setSitio({...sitio, [name] : value }) 
    }

    function subir_info(){//boton de submit
        event.preventDefault()
        dispatch(conseguir_municipios(sitio)) //este dispatch permite la busqueda de los elementos deseados
        setShow(true)
        setTimeout(()=>{setIsLoading(false)}, 1500)
    }

    useEffect(()=>{
        dispatch(borrar_errores()) //para evitar colisiones con acciones pasadas 
    },[])

    return(
        <div className={style.contenedor}>
            <form className={style.buscador}> {/*este es el formulario para entregar los datos especificos que se buscara*/}
            <input name="ciudad" required={true} onChange={contener_info} type="text" className={style.input}></input>

            <select name="pais" onChange={contener_info} className={style.select}>
                {iso31661.map((I)=>{
                    if(I.state === "assigned") return(<option value={I.alpha2}>{I.name}:{I.alpha2}</option>)
                })}
            </select>

            { sitio.pais && sitio.ciudad ? (<input type="submit" name="submit" onClick={subir_info} className={style.boton}></input>) : "" }
            </form>{/*si no tiene la ciudad o el pais no permite la compra*/}

            {!show ? <FontAwesomeIcon icon={faMap} className={style.icon}/> : (
                <div name="lista"> {/*contenedor de todos los RESULTADOS obtenidos en la busqueda*/}
                {isLoading ? <Pantalla_de_carga/> : 
                (
                <div>
                    { error.valor ? <Mensaje_error mensaje={error.mensaje}/> :
                municipios?.map( (P)=>{
                    return(
                        <Resultados municipio={P}/>
                    )
                } )}
                </div>
                )}
                
            </div>
            )}
            
        </div>
    )
}

export default Busqueda