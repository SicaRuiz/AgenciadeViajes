import React from 'react';

function Modal(){
    return(
        <div className="modal fade search_back" id="iniciarsesion" tabIndex="-1" role="dialog" aria-labelledby="iniciarsesionLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="iniciarsesionLabel">Iniciar Sesión</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form className="container-fluid text-center">
                        <div className="row mb-2">
                            <label htmlFor="user" className="col-4">Usuario:</label>
                            <input type="text" className=" col-6  border-info form-control" id="user"/>
                        </div>
                        
                        <div className="row mb-2">
                            <label htmlFor="contraseñaingreso" className="col-4">Contraseña:</label>
                            <input type="text" className="col-6  border-info form-control" id="contraseñaingreso"/>
                        </div>   
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-info">Iniciar Sesión</button>
                        <button type="button" className="btn btn-danger" data-dismiss="modal">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Modal;