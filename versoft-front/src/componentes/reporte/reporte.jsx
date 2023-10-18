import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import style from "./reporte.module.css"
import { useParams, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { borrar_info, conseguir_info } from '../../../redux/actions'

const Reporte = () =>{

    const dispatch = useDispatch()
    const info = useSelector(state => state.info)
    
    const {lat, lon} = useParams()

    useEffect(()=>{
        dispatch(borrar_info())
        dispatch(conseguir_info(lat, lon))
    },[])

    return(
        <div>
            { info.nombre && <h1>{info?.nombre}</h1>}
            <img src="https://openweathermap.org/img/wn/04d@2x.png"/>
            <FontAwesomeIcon icon={faCoffee} className={style.icons}/>
        </div>
    )
}

export default Reporte