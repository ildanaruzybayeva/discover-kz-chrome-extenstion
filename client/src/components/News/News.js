import React from "react";
import "./News.css";

function News(props) {
  return (
    <div class="news-container">
      <a
        target="_blank"
        href={props.link}
        rel="noopener noreferrer"
        class="news-paragraph"
      >
        {props.title}
      </a>
    </div>
  );
}

export default News;
