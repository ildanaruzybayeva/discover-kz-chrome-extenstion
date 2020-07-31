import React from "react";
import "./Quote.css";

function Quote(props) {
  return (
    <div className="Quote">
      <p className="quote paragraph">{props.quotes}</p>
      <p className="quote author">Абай К.</p>
    </div>
  );
}

export default Quote;
