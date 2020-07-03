import React, { useState, useEffect } from "react";
import Unsplash, { toJson } from "unsplash-js";
import "./Background.css";

const unsplash = new Unsplash({
  accessKey: "1911bed2e67cf6900e231737eb1ebabaca3168bdb5f7908087f046ff1c820fd1",
  secret: "3ecb1c1711fdc64c6711be8dfcd0ab2705bf5d1c7242e8ebc8c5665791b678a6"
});

const randIdx = Math.floor(Math.random() * 15);

function Background() {
  const [image, setImage] = useState("");
  useEffect(() => {
    unsplash.search
      .photos("almaty", 1, 15, { orientation: "landscape", order_by: "latest" })
      .then(toJson)
      .then(data => {
        setImage(data.results[randIdx].urls.raw);
      });
  }, []);
  return (
    <div className="background">
      <img src={image} alt="kz" />
    </div>
  );
}

export default Background;
