import React from 'react';

function Modal(){
    return(
        <div className="modal fade search_back" id="registrate" tabIndex="-1" role="dialog" aria-labelledby="registrateLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content ">
                    <div className="modal-header">
                        <h5 className="modal-title" id="registrateLabel">Registrate</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form className="container-fluid text-center">
                        <div className="row mb-2">
                            <label htmlFor="usuario" className="col-4">Usuario:</label>
                            <input type="text" className="col-6  border-info form-control" id="usuario"/>
                        </div>
                        <div className="row mb-2">
                            <label htmlFor="nombre" className="col-4">Nombre:</label>
                            <input type="text" className="col-6  border-info form-control" id="nombre"/>
                        </div>
                        <div className="row mb-2">
                            <label htmlFor="apellido" className="col-4">Apellido:</label>
                            <input type="text" className="col-6 border-info form-control" id="apellido"/>
                        </div>
                        <div className="row mb-2">
                            <label htmlFor="contraseña" className="col-4">Contraseña:</label>
                            <input type="password" className="col-6  border-info form-control" id="contraseña"/>
                        </div>
                        <div className="row">
                            <label htmlFor="repitecontraseña" className="col-4">Repite la Contraseña:</label>
                            <input type="password" className="col-6  border-info form-control" id="repitecontraseña"/>
                        </div>
                    
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-info">Crear Cuenta</button>
                        <button type="button" className="btn btn-danger" data-dismiss="modal">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Modal;