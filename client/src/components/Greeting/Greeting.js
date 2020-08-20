import React from "react";
import "./Greeting.css";
import { almatyTimeHour, chooseGreeting } from "../../utils/helpers/helpers";

const greeting = chooseGreeting(almatyTimeHour);

export default function Greeting(props) {
  return (
    <div className="Greeting">
      <h1 className="greeting-text">{greeting},</h1>
      <div className="input-container">
        <input 
          className="greeting-input"
          type="text" 
          placeholder="atyńyz kіm?"
          value={props.username}
          onChange={props.handleChange}
        />
        <span className="input-underline"></span>
      </div>
    </div>
  );
}
