import React from "react";
import "./Time.css";
import Clock from "react-live-clock";

function Time() {
  return (
      <div className="Time">
          <Clock format={"HH:mm:ss"} ticking={true} timezone={"Asia/Almaty"} />
      </div>
  );
}

export default Time;
