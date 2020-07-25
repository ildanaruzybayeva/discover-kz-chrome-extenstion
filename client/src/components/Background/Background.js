import React, { useState, useEffect } from "react";
import "./Background.css";
import Weather from "../Weather/Weather";
import Image from "../Image/Image";
import { randNum } from "../../utils/helpers/helpers";
import Greeting from "../Greeting/Greeting";
import Currency from "../Currency/Currency";
import useLocalStorage from "./customHooks/useLocalStorage";
import Time from "../Time/Time";
import News from "../News/News";
import Search from "../Search/Search";
import Quote from "../Quote/Quote";

const URL = "https://kz-extension.herokuapp.com";
const quote = "This is a quote";

function Background() {
  const [image, setImage] = useState("");
  const [author, setAuthor] = useState("");
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState(0);
  const [icon, seticon] = useState("");
  const [currency, setCurrency] = useState({});
  const [username, setUsername] = useLocalStorage("name", "");

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

  const handleChange = e => {
    return setUsername(e.target.value);
  };

  return (
    <div className="container">
      <Image author={author} image={image} />
      <Weather temperature={temperature} city={city} icon={icon} />
      <Time />
      <Greeting username={username} handleChange={handleChange} />
      <Currency currency={currency} />
      <News />
      <Search />
      <Quote quote={quote} />
    </div>
  );
}

export default Background;
