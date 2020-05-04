import React from 'react';
import Buscador from '../Buscador/Buscador';
import Hoteles from '../Hoteles/Hoteles';
import Sugerencias1 from '../Hoteles/Sugeridos1';


function Content(){
    return(
    <div>
        <Buscador  />
        <Hoteles />
        <Sugerencias1 />
    </div>
    );
}
export default Content;