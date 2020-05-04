import React from 'react';
import './Cards.css';

function Cards(){
    return(
    <div className="container-fluid search_back">
        <div className="card-deck pb-5">
            <div className="card border-0 bgfondo">
                <img className="card-img-top" src="https://www.fonditos3d.com/1920x1080/avion-comercial-3d.jpg" alt="Aviones" />
                <div className="card-body text-center">
                <h5 className="card-title">Aviones</h5>
                <p className="card-text">Los mejores viajes y los precios más bajos para tus vacaciones están en Despegar. ¡Aprovecha las ofertas en vuelos, hoteles y paquetes para tus vacaciones!</p>
                </div>
            </div>
            <div className="card border-0 bgfondo">
                <img className="card-img-top" src="https://www.viajes-carrefour.com/blog/wp-content/uploads/2018/07/complejo-hotelero-lujo.jpg" alt="Hoteles" />
                <div className="card-body text-center">
                <h5 className="card-title">Hoteles</h5>
                <p className="card-text">Hoteles, departamentos, hostels y alojamientos ¡Descubrí hoteles baratos y céntricos en un solo lugar! Reservá ahora tu hotel con reserva flexible.</p>
                </div>
            </div>
            <div className="card border-0 bgfondo">
                <img className="card-img-top" src="https://k44.kn3.net/taringa/4/4/4/3/5/9/4/emijc/439.jpg?1121" alt="Lugares" />
                <div className="card-body text-center">
                <h5 className="card-title">Lugares</h5>
                <p className="card-text">Argentina tiene muchos lugares turísticos pero en esta nota-galería te voy a mostrar los 20 lugares turísticos más visitados por los turistas y que debes conocer.</p>
                </div>
            </div>
        </div>
    </div>
    );
}
export default Cards;