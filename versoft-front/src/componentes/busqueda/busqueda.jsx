import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { conseguir_paises } from "../../../redux/actions"
import {iso31661} from 'iso-3166';
import Resultados from "../resultados/resultados";
import style from "./busqueda.module.css"

const Busqueda = () =>{

    const dispatch = useDispatch()
    const paises = useSelector(state => state.paises)

    const [sitio, setSitio] = useState({
        ciudad: 0,
        pais: 0
    })

    function contener_info (event){
        const name = event.target.name;
        const value = event.target.value

        setSitio({...sitio, [name] : value })
        console.log(sitio)
    }

    function subir_info(){
        event.preventDefault()
        console.log(sitio)
        dispatch(conseguir_paises(sitio))
    }

    return(
        <div className={style.contenedor}>
            <form className={style.buscador}>
            <input name="ciudad" required={true} onChange={contener_info} type="text"></input>

            <select name="pais" onChange={contener_info}>
                {iso31661.map((I)=>{
                    if(I.state === "assigned") return(<option value={I.alpha2}>{I.name}:{I.alpha2}</option>)
                })}
            </select>

            { sitio.pais && sitio.ciudad ? (<input type="submit" name="submit" onClick={subir_info}></input>) : "" }
            </form>
            <div name="lista">
                {paises?.map( (P)=>{
                    return(
                        <Resultados pais={P}/>
                    )
                } )}
            </div>
        </div>
    )
}

export default Busqueda