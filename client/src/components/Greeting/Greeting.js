import React from "react";
import "./Greeting.css";
import { almatyTime } from "../../utils/helpers/helpers";

console.log(almatyTime);

export default function Greeting(props) {
  return (
    <div>
      <h1 className="greeting-text">Salem, </h1>
      <input
        type="text"
        placeholder="seniñ atıñ kim?"
        value={props.username}
        onChange={props.handleChange}
      />
    </div>
  );
}
