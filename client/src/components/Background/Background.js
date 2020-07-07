import React, { useState, useEffect } from "react";
import "./Background.css";
import Weather from "../Weather/Weather";
import Image from "../Image/Image";
import { almatyTime, randNum } from "../../utils/helpers/helpers";

const URL_PHOTOS =
  "https://8000-a334ccf2-365c-4afc-8e65-38540926ff08.ws-eu01.gitpod.io/photos";
const URL_WEATHER =
  "https://8000-a334ccf2-365c-4afc-8e65-38540926ff08.ws-eu01.gitpod.io/weather";

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
    const data = fetch(URL_WEATHER)
      .then(res => res.json())
      .then(data => {
        setCity(data.name);
        setTemperature(data.main.temp);
        setCountry(data.sys.country);
        seticon(data.weather[0].icon);
        setWeatherInfo(data.weather[0].description);
      });
    return data;
  };

  const getPhoto = () => {
    const data = fetch(URL_PHOTOS)
      .then(res => res.json())
      .then(data => {
        setImage(data.results[randNum].urls.regular);
        setDescription(data.results[randNum].alt_description);
        setAuthor(data.results[randNum].user.username);
      });
    return data;
  };

  useEffect(() => {
    getWeather();
    getPhoto();
  }, []);

  return (
    <div className="container">
      <Image descriton={descriton} author={author} image={image} />
      <Weather
        temperature={temperature}
        country={country}
        city={city}
        icon={icon}
        weatherInfo={weatherInfo}
      />
      <div className="timeAlmaty">{almatyTime}</div>
    </div>
  );
}

export default Background;
