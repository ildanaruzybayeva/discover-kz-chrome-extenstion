import React from "react";
import "./Greeting.css";
import { almatyTimeHour, chooseGreeting } from "../../utils/helpers/helpers";

const greeting = chooseGreeting(almatyTimeHour);

export default function Greeting(props) {
  return (
    <div className="Greeting">
      <h1 className="greeting-text">{greeting},</h1>
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
