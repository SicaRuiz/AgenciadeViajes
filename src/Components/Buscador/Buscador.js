import React from 'react';
import './Buscador.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Buscador(){
    return(
    <div className="container-fluid mb-0 mt-2 text-center search_back">
        <form > 
            <div className="form-group mb-0 container">
                <h5 htmlFor="formGroupExampleInput" className="text-info my-4">Busca tus lugares favoritos</h5>
                <input type="text" className="form-control mb-0 border-info" id="formGroupExampleInput" placeholder="Busca tu destino"/>
                <button type="button" className="btn btn-warning my-4 px-5 text-info rounded-pill font-weight-bold"><FontAwesomeIcon icon={faSearch} className="mr-2"/>Buscar</button>
            </div>
        </form>
    </div>
    );
}

export default Buscador;