import React from "react";
import "./style.css"

export default function Map() {
    return (
        <div className="mapContainer">
           <iframe
        className= "map"
      title="Map"
        width="1268"
        height="738"
        style={{border:"0"}}
        loading="lazy"
        allowfullscreen
        referrerpolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBHM6qbhNeeOu_VUF_3mgFXog7rISleV5s
    &q=229+W+43rd+St%2C+New+York%2C+NY+10036"
      ></iframe> 
        </div>
        
    )
}