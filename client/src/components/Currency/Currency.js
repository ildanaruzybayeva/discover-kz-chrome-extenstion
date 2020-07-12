import React from "react";
import "./Currency.css";

export default function Currency(props) {
  return (
    <div>
      <p>USD: {Math.trunc(props.currency.USD_KZT)} ₸</p>
      <p>EUR: {Math.trunc(props.currency.EUR_KZT)} ₸</p>
    </div>
  );
}
