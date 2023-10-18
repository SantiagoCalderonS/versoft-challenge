import { iso31661 } from "iso-3166"
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Button, Card } from "react-bootstrap";
import style from "./resultados.module.css"
import { Link } from "react-router-dom";

const Resultados = ({pais}) =>{

    const [nacion, setNacion] = useState("")

    function par (pais){
        iso31661.forEach((I)=>{
            I.alpha2 === pais ? setNacion(I.name) : ""
        })
    }

    useEffect(()=>{
        par(pais.pais)
    },[])

    //<i class="fa-regular fa-location-dot"></i>
    return(
        <Link to={`/reporte/${pais.latitud}/${pais.longitud}/clima`}>
        <Card style={{ width: '95%', display: "inline-block", marginTop : "25px" }} >
            <Card.Body className={style.carta}>
                <div className={style.imagenContenedor}>
                    <FontAwesomeIcon icon={faLocationDot} className={style.img}/>
                </div>
        
        <div className={style.info}>
        <div style={{display: "inline-flex"}}><h1>{pais.nombre} </h1><h5> .({pais.estado},{nacion})</h5></div>
        <h2>Latitud:{pais.latitud}</h2>
        <h2>Longitud:{pais.longitud}</h2>
        </div>
            </Card.Body>
        </Card>
        </Link>
    )
}

export default Resultados

/*
        <Card.Img variant="top" src={criatura.image}  style={{height: "300px"}}/>
        
          <Card.Title>{pais.nombre}</Card.Title>
          <Card.Text>
              {pais.estado}
          </Card.Text>
          <Button onClick={changeMonster}>vanguardia</Button>
        
       */