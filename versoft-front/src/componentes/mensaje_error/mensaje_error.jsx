import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import style from "./mensaje_error.module.css"

const Mensaje_error = () => {
    return(
    <div className={style.contenedor}>
        <FontAwesomeIcon icon={faTriangleExclamation} className={style.img}/>
    </div>
    )
}

export default Mensaje_error;