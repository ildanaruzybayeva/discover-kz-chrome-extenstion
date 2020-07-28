import React from "react";
import "./Quote.css";

function Quote(props) {
    return (
        <div className="Quote">
            <p className="quote paragraph">{props.quote}</p>
            <p className="quote author">The author</p>
        </div>
    )
}

export default Quote;