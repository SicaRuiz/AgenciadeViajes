import React from "react";
import './Header.css';
import Registrarse from '../Buttoms/Registrarse';
import IniciarSesion from '../Buttoms/IniciarSesion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPlane, faConciergeBell, faMapMarkerAlt, faCameraRetro, faGlobeAmericas, faGlobeAfrica, faGlobeAsia, faGlobeEurope } from '@fortawesome/free-solid-svg-icons';
import {  Link  } from "react-router-dom";



function Header(){
    return (
        <div className="mb-3 pb-2 border-bottom border-warning">
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <a className="navbar-brand" href="/"><img src="https://images.vexels.com/media/users/3/153370/isolated/preview/ed97cff77251654d85859370a06cd5a9-icono-de-trazo-de-color-de-mochila-de-viaje-by-vexels.png" width="50" height="50" alt=""/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link text-info"><FontAwesomeIcon icon={faHome} className="mr-1"/>Inicio<span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-info " to="/vuelos"><FontAwesomeIcon icon={faPlane} className="mr-1"/>Viajes</Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link className="nav-link text-info" to="/hoteles"><FontAwesomeIcon icon={faConciergeBell} className="mr-1"/>Hoteles</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-info" to="/atracciones"><FontAwesomeIcon icon={faCameraRetro} className="mr-1"/>Atracciones</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-info" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-1"/>Lugares
                            </a>
                            
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item text-info" href="/Aventura"><FontAwesomeIcon icon={faGlobeAmericas} className="mr-1"/>America</a>
                                <a className="dropdown-item text-info" href="/Disparos"><FontAwesomeIcon icon={faGlobeAfrica} className="mr-1"/>Africa</a>
                                <a className="dropdown-item text-info" href="/Disparos"><FontAwesomeIcon icon={faGlobeAsia} className="mr-1"/>Asia</a>
                                <a className="dropdown-item text-info" href="/Disparos"><FontAwesomeIcon icon={faGlobeEurope} className="mr-1"/>Europa</a>
                            </div>
                        </li>
                    </ul>
                    <button type="button" className="btn btn-warning ml-2 rounded-pill text-info" data-toggle="modal" data-target="#iniciarsesion" >Iniciar Sesion</button>
                    <button type="button" className="btn btn-warning ml-2 rounded-pill text-info" data-toggle="modal" data-target="#registrate" >Registrate</button>
                    <IniciarSesion />
                    <Registrarse/>
                     </div>
                </nav>
            </div>
  );
}
export default Header;
