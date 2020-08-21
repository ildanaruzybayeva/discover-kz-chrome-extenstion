import React from "react";
import "./Weather.css";

function Weather(props) {
    return (
        <div className="Weather">
            <div className="weather-info">
                <img
                    className="weather-icon"
                    src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`}
                    alt={props.city}
                />
                <p className="paragraph-city-info">{props.temperature}°C</p>
            </div>
            <p className="paragraph-city-info paragraph-city">{props.city}</p>
        </div>
    );
}

export default Weather;
