import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import style from "./pantalla_de_carga.module.css"

const Pantalla_de_carga = () => {/*pantalla de carga, como el proyecto es pequeño 
no tarda mas de medio segundo en dar respuesta, por lo que hardcodee la 
carga para que aparezca por 1.5 siempre que se haga una peticion al server*/

    return(
        <div className={style.contenedor}>
            <FontAwesomeIcon icon={faSpinner} className={style.img} />
        </div>
    )
}


export default Pantalla_de_carga;