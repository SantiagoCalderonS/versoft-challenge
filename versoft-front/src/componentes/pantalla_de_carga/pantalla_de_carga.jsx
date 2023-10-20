import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import style from "./pantalla_de_carga.module.css"

const Pantalla_de_carga = () => {
    return(
        <div className={style.contenedor}>
            <FontAwesomeIcon icon={faSpinner} className={style.img} />
        </div>
    )
}


export default Pantalla_de_carga;