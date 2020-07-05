import React, { useState, useEffect } from "react";
import Unsplash, { toJson } from "unsplash-js";
import "./Background.css";
import Weather from "../Weather/Weather";
import axios from "axios";

const unsplash = new Unsplash({
  accessKey: "1911bed2e67cf6900e231737eb1ebabaca3168bdb5f7908087f046ff1c820fd1",
  secret: "3ecb1c1711fdc64c6711be8dfcd0ab2705bf5d1c7242e8ebc8c5665791b678a6"
});

const randIdx = Math.floor(Math.random() * 15);
const URL =
  "https://8000-cbaf8907-4dfb-49fb-bf75-aef554dd1cd0.ws-eu01.gitpod.io/weather";

function Background() {
  const [image, setImage] = useState("");
  const [descriton, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState(0);
  const [country, setCountry] = useState("");
  const [icon, seticon] = useState("");
  const [weatherInfo, setWeatherInfo] = useState("");

  const getWeather = () => {
    const data = fetch(URL)
      .then(res => res.json())
      .then(data => {
        setCity(data.name);
        setTemperature(data.main.temp);
        setCountry(data.sys.country);
        seticon(data.weather[0].icon);
        setWeatherInfo(data.weather[0].description);
      });
  };

  useEffect(() => {
    getWeather();
    unsplash.search
      .photos("almaty city", 1, 15, {
        orientation: "landscape",
        order_by: "latest"
      })
      .then(toJson)
      .then(data => {
        setImage(data.results[randIdx].urls.raw);
        setDescription(data.results[randIdx].alt_description);
        setAuthor(data.results[randIdx].user.username);
      });
  }, []);

  return (
    <div className="image-container">
      <div className="image-info">
        <h4>{descriton}</h4>
        <p>author: {author}</p>
      </div>
      <div className="image-picture">
        <img src={image} alt={descriton} className="backgroundImage" />
      </div>
      <div>
        <Weather
          temperature={temperature}
          country={country}
          city={city}
          icon={icon}
          weatherInfo={weatherInfo}
        />
      </div>
    </div>
  );
}

export default Background;
