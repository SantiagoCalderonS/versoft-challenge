import style from "./landPage.module.css"

const LandPage = ({prop})=>{

    return(
    <div className={style.land}>
        <div className={style.mensaje}>
        <p>Esta app fue hecha con el proposito de entrenamiento, emplea el uso de la API de <a href="https://openweathermap.org">https://openweathermap.org</a>. Cuenta con dos funciones principales, la primera usa tu posicion para encontrar la informacion del clima de tu lugar, la segunda permite buscar la info de cualquier parte del mundo a tiempo real.</p>
        <button onClick={prop}>BIENVENIDO</button>
        </div>    
    </div>
    )
    }
    
    export default LandPage;