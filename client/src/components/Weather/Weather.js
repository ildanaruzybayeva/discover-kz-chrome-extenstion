import React from "react";
import "./Weather.css";

function Weather(props) {
    return (
        <div className="Weather">
            <span className="paragraph-city-info">{props.city}</span>
            <span className="paragraph-city-info">{props.temperature}</span>
            <img
                className="city-icon"
                src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`}
                alt={props.city}
            />
        </div>
    );
}

export default Weather;
