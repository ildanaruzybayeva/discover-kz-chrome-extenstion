import React from "react";
import "./Time.css";
import Clock from "react-live-clock";

function Time() {
  return <Clock format={"HH:mm:ss"} ticking={true} timezone={"Asia/Almaty"} />;
}

export default Time;
