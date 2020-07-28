import React from "react";
import "./Image.css";

function Image(props) {
    return (
        <div className="Image">
            <div className="image-background" style={{ backgroundImage: `url(${props.image})` }} />
            <p className="image-author">photo: {props.author}</p>
        </div>
    );
}

export default Image;
