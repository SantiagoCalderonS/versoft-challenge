import { iso31661 } from "iso-3166"
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Button, Card } from "react-bootstrap";
import style from "./resultados.module.css"
import { Link } from "react-router-dom";

const Resultados = ({municipio}) =>{//este componente es para mostrar cada uno de los posibles resultados de la busqueda realizada

    //estructura de "municipio"
    /*
              { nombre: string
                latitud: number
                longitud : number
                estado : string
                pais: string } 
    */


    return(
        <Link to={`/reporte/${municipio.latitud}/${municipio.longitud}/${municipio.nombre}/clima`}> {/*todo el componente es un link*/}
        <Card style={{ width: '95%', display: "inline-block", marginTop : "25px" }} >
            <Card.Body className={style.carta}>
                <div className={style.imagenContenedor}>
                    <FontAwesomeIcon icon={faLocationDot} className={style.img}/> {/*icono obtenido de una api externa*/}
                </div>
        
        <div className={style.info}>
        <div style={{display: "inline-flex"}}><h1>{municipio.nombre} </h1>
        {  municipio.estado /*algunos resultados carecian de esta prop*/ ?
        (<h5> .({municipio.estado},{municipio.pais})</h5>) : (<h5> .({municipio.pais})</h5>)}
        </div>
        <h2>Latitud:{municipio.latitud}</h2>
        <h2>Longitud:{municipio.longitud}</h2>
        </div>
            </Card.Body>
        </Card>
        </Link>
    )
}

export default Resultados