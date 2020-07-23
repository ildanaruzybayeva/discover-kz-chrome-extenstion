import React from "react";
import Clock from "react-live-clock";
import "./Time.css";

function Time() {
  return <Clock format={"HH:mm:ss"} ticking={true} timezone={"Asia/Almaty"} />;
}

export default Time;
