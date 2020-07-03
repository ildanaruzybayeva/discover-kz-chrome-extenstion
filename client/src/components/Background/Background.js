import React, { useState, useEffect } from "react";

const URL =
  "https://api.unsplash.com/search/photos/?client_id=1911bed2e67cf6900e231737eb1ebabaca3168bdb5f7908087f046ff1c820fd1&query=nature";

const randIdx = Math.floor(Math.random() * 10);

function Background() {
  const [image, setImage] = useState("");
  useEffect(() => {
    fetch(URL)
      .then(response => response.json())
      .then(data => setImage(data.results[randIdx].urls.regular));
  }, []);
  return (
    <div>
      <img src={image} alt="kz" />
    </div>
  );
}

export default Background;
