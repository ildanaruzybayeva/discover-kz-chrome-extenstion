import React from "react";
import "./News.css";

function News(props) {
    return (
        <a
            target="_blank"
            href={props.link}
            rel="noopener noreferrer"
            className="news-paragraph"
        >
            {props.title}
        </a>
    );
}

export default News;
