import React from 'react';
import './Slider.css';
import slider from './slider1.jpg';


function Slider() {
    return (
        <div>
            <div id="carouselExampleSlidesOnly" className="carousel slide mt-2"  data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active"  data-interval="2000">
                        <img className="d-block w-100" src={slider}  alt="First slide"/>
                    </div>
                    <div className="carousel-item"  data-interval="2000">
                        <img className="d-block w-100" src="https://josecardenas.com/wp-content/uploads/2018/06/Asia-Marzo-1600x650.jpg"   alt="Second slide"/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Slider;