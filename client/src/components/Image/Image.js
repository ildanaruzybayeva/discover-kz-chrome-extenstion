import React from "react";
import "./Image.css";

function Image(props) {
  return (
    <div className="Image">
      <div className="image-info">
        <h4>{props.descriton}</h4>
        <p>author: {props.author}</p>
      </div>
      <div className="image-picture">
        <img
          src={props.image}
          alt={props.descriton}
          className="backgroundImage"
        />
      </div>
    </div>
  );
}

export default Image;
