import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import style from "./clima.module.css"

const Clima = () =>{
    


    return(
        <div>
            <h1>hola</h1>
            <img src="https://openweathermap.org/img/wn/04d@2x.png"/>
            <FontAwesomeIcon icon={faCoffee} className={style.icons}/>
        </div>
    )
}

export default Clima