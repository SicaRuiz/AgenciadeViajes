import React from 'react';
import Buscador from '../Buscador/Buscador';
import Vuelos from '../Vuelos/Vuelos';
import SugerenciasVuelos from '../Vuelos/SugeridosVuelos';

function Content1(){
    return(
    <div>
        <Buscador  />
        <Vuelos />
        <SugerenciasVuelos />
    </div>
    );
}
export default Content1;