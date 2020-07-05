import React from "react";
import axios from "axios";
import "./Weather.css";

function Weather(props) {
  return (
    <div className="Weather">
      <span>{props.name}</span>
      <sup>{props.country}</sup>
      <sup>{Math.round(props.temperature)}&deg;C</sup>
      <p>{props.weatherInfo}</p>
      <img
        className="city-icon"
        src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`}
        alt={props.name}
      />
    </div>
  );
}

export default Weather;
