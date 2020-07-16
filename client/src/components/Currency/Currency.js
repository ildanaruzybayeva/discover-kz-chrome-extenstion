import React from "react";
import "./Currency.css";

export default function Currency(props) {
    return (
        <div>
            <p className="paragraph-currency">USD: {Math.trunc(props.currency.USD_KZT)} ₸</p>
            <p className="paragraph-currency">EUR: {Math.trunc(props.currency.EUR_KZT)} ₸</p>
        </div>
    );
}
