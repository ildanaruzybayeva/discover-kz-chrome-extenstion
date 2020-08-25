import React, { useState, useEffect } from "react";
import Weather from "../Weather/Weather";
import Image from "../Image/Image";
import Greeting from "../Greeting/Greeting";
import Currency from "../Currency/Currency";
import Time from "../Time/Time";
import News from "../News/News";
import Search from "../Search/Search";
import Quote from "../Quote/Quote";
import useLocalStorage from "./customHooks/useLocalStorage";
import "./Background.css";
import { randNum, photoNum } from "../../utils/helpers/helpers";

const URL = "https://kz-extension.herokuapp.com";

function Background() {
  const [image, setImage] = useState("");
  const [imgSource, setImgSource] = useState("");
  const [author, setAuthor] = useState("");
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState(0);
  const [icon, seticon] = useState("");
  const [currency, setCurrency] = useState({});
  const [username, setUsername] = useLocalStorage("name", "");
  const [news, setNews] = useLocalStorage("news", []);
  const [quotes, setQuotes] = useState([]);

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
        setImage(data[photoNum].urls.raw);
        setAuthor(data[photoNum].user.name);
        setImgSource(data[photoNum].links.html);
      });
    return data;
  };

  const getCurrency = () => {
    const data = fetch(`${URL}/currency`)
      .then(res => res.json())
      .then(data => {
        setCurrency(data);
      });
    return data;
  };

  const getNews = () => {
    const data = fetch(`${URL}/news`)
      .then(res => res.json())
      .then(data => {
        setNews(data);
        localStorage.setItem("news", JSON.stringify(data));
      });
    return data;
  };

  const getQuotes = () => {
    const data = fetch(`${URL}/quotes`)
      .then(res => res.json())
      .then(data => {
        setQuotes(data[randNum].quote);
      });
    return data;
  };

  useEffect(() => {
    getWeather();
    getPhoto();
    getCurrency();
    getNews();
    getQuotes();
  }, []);

  const handleChange = e => {
    return setUsername(e.target.value);
  };

  return (
    <div className="container">
      <div className="image-container">
        <Image author={author} image={image} imgSource={imgSource} />
      </div>
      <div className="info-container">
        <div className="background"></div>
        <div className="info-top">
          <Weather temperature={temperature} city={city} icon={icon} />
          <Time />
          <Currency currency={currency} />
        </div>
        <div className="greeting-container">
          <Greeting username={username} handleChange={handleChange} />
        </div>
        <div className="news-container">
          {news.map(n => {
            return <News title={n.title} link={n.link} key={n.title} />;
          })}
        </div>
        <div className="search-container">
          <Search />
        </div>
        <div className="quote-container">
          <Quote quotes={quotes} />
        </div>
      </div>
    </div>
  );
}

export default Background;
