import React from "react";
import "./Greeting.css";
import { almatyTime } from "../../utils/helpers/helpers";

console.log(almatyTime);

export default function Greeting(props) {
  return (
    <div className="Greeting">
      <h1 className="greeting-text">Salem,</h1>
      <input
        className="greeting-input"
        type="text"
        placeholder="аты"
        value={props.username}
        onChange={props.handleChange}
      />
    </div>
  );
}
