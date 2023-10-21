import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import style from "./mensaje_error.module.css"

const Mensaje_error = ({mensaje}) => {
    return(
    <div className={style.contenedor}>
        <FontAwesomeIcon icon={faTriangleExclamation} className={style.img}/>
        <h1>{mensaje}</h1>
    </div>
    )
}

export default Mensaje_error;