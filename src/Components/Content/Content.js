import React from 'react';
import './Content.css';
import Slider from '../Slider/Slider';
import Buscador from '../Buscador/Buscador';
import Cards from '../Cards/Cards';

function Content(){
    return(
    <div>
        <Slider />
        <Buscador />
        <Cards />
    </div>
    );
}
export default Content;