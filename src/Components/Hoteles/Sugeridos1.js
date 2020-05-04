import React from 'react';
import './Sugeridos1.css';

function Sugeridos1() {
    return (
        <div className="container-fluid">
            <h3 className="text-center text-info py-3">Buscar por tipo de alojamiento</h3>
            <div className="row search_back row-cols-1 row-cols-md-4 text-center ">
                <div className="col mb-4">
                    <div className="card border-0 h-50">
                        <img src="https://www.wallpapers4u.org/wp-content/uploads/hotel_room_bed_stylish_modern_39745_1920x1080.jpg" className="card-img-top" alt="hoteles" />
                        <div className="card-body">
                            <h5 className="card-title">Hoteles</h5>
                        </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card border-0 h-50">
                        <img src="https://www.wallpaperup.com/uploads/wallpapers/2013/07/16/119035/3daf371b07612156bf4304390e2ea866.jpg" className="card-img-top" alt="departamentos" />
                        <div className="card-body">
                            <h5 className="card-title">Departamentos</h5>
                        </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card border-0 h-50">
                        <img src="https://wallpapermemory.com/uploads/435/villa-wallpaper-full-hd-478674.jpg" className="card-img-top" alt="https://wallpapermemory.com/uploads/435/villa-wallpaper-full-hd-478674.jpg" />
                        <div className="card-body">
                            <h5 className="card-title">Villas</h5>
                        </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card border-0 h-50">
                        <img src="https://i.pinimg.com/originals/0b/01/6b/0b016b03574bd16569ddceee25247029.jpg" className="card-img-top" alt="chales de montaña" />
                        <div className="card-body">
                            <h5 className="card-title">Chales de montaña</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sugeridos1;