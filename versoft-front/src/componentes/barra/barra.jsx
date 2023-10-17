import { Nav, Button, Offcanvas, Navbar} from 'react-bootstrap';
import { useState } from 'react';
import { NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import style from "./barra.module.css"

const Barra = () =>{

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <div className={style.barraLateral}>
          <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>

        <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Explorar</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Nav className={style.tablilla}>
            <Nav.Link><Link to="/inicio">Tu ubicacion</Link></Nav.Link>
            <Nav.Link ><Link to="/busqueda">Mundo</Link></Nav.Link>

          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
        </div>
    )
}

export default Barra