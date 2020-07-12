import React, { useState, useEffect } from "react";
import "./Background.css";
import Weather from "../Weather/Weather";
import Image from "../Image/Image";
import { randNum } from "../../utils/helpers/helpers";
import Greeting from "../Greeting/Greeting";
import Currency from "../Currency/Currency";

const URL =
  "https://8000-a1ea5764-1c9c-4e01-8116-919f8c363ece.ws-eu01.gitpod.io";

function Background() {
  const [image, setImage] = useState("");
  const [author, setAuthor] = useState("");
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState(0);
  const [icon, seticon] = useState("");
  const [currency, setCurrency] = useState({});

  const getWeather = () => {
    const data = fetch(`${URL}/weather`)
      .then(res => res.json())
      .then(data => {
        setCity(data.name);
        setTemperature(data.main.temp);
        seticon(data.weather[0].icon);
      });
    return data;
  };

  const getPhoto = () => {
    const data = fetch(`${URL}/photos`)
      .then(res => res.json())
      .then(data => {
        setImage(data[randNum].urls.raw);
        setAuthor(data[randNum].user.username);
      });
    return data;
  };

  const getCurrency = () => {
    const data = fetch(`${URL}/currency`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setCurrency(data);
      });
    return data;
  };

  useEffect(() => {
    getWeather();
    getPhoto();
    getCurrency();
  }, []);

  return (
    <div className="container">
      <Image author={author} image={image} />
      <Weather temperature={temperature} city={city} icon={icon} />
      <Greeting />
      <Currency currency={currency} />
    </div>
  );
}

export default Background;
