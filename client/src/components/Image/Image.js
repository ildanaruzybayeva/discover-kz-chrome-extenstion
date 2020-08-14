import React from "react";
import "./Image.css";

function Image(props) {
  const { image, author, imgSource } = props;
  return (
    <div className="Image">
      <div
        className="image-background"
        style={{ backgroundImage: `url(${image})` }}
      />
      <p className="image-author">
        <a href={`${imgSource}`} target="_blank">
          {author} / Unsplash
        </a>
      </p>
    </div>
  );
}

export default Image;
