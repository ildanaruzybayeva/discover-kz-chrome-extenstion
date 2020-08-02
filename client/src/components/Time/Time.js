import React from "react";
import "./Time.css";
import Clock from "react-live-clock";
import { month, day } from "../../utils/helpers/helpers";

function Time() {
  return (
    <div className="Time">
      <div className="Date">
        {month} {day}
      </div>
      <Clock format={"HH:mm:ss"} ticking={true} timezone={"Asia/Almaty"} />
    </div>
  );
}

export default Time;
