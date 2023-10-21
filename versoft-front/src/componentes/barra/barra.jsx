import { Nav, Button, Offcanvas, Navbar} from 'react-bootstrap';
import { useState } from 'react';
import { NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import style from "./barra.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const Barra = () =>{

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);//cerrar barra
    const handleShow = () => setShow(true);//abrir barra

    return(
        <div className={style.barraLateral}>{/*barra de navegacion que permanece oculta, sacada de react-bootstrap*/}
        {!show && <Button variant="primary" onClick={handleShow} style={{ width: '90%', backgroundColor: "orange", borderColor: "orange"}}>
        <FontAwesomeIcon icon={faGlobe}/>
        </Button>}

        <Offcanvas show={show} onHide={handleClose} style={{backgroundColor: "orange"}}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Explorar</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Nav className={style.tablilla}>
          <Link to="/"><Button style={{ width: '90%', height: "100px", marginTop: "30px", backgroundColor: "white", color: "orange", borderColor: "orange"}}><h2>Tu ubicacion</h2></Button></Link>
          <Link to="/busqueda"><Button style={{ width: '90%', height: "100px", marginTop: "30px", backgroundColor: "white", color: "orange", borderColor: "orange"}}><h2>Mundo</h2></Button></Link>
          {/*se me olvido pasar estos estilos al archivo css*/}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
        </div>
    )
}

export default Barra