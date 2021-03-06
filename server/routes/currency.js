const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

const FREE_URL =
  `https://free.currconv.com/api/v7/convert?q=USD_KZT,EUR_KZT&compact=ultra&apiKey=${process.env.currency}`;
//const URL = `https://api.currconv.com/api/v7/convert?q=USD_KZT,EUR_KZT&compact=ultra&apiKey=${process.env.currencyAPI}`;

const defaultRates = {
  USD_KZT: 415,
  EUR_KZT: 480
};

router.get("/currency", async (req, res) => {
  try {
    const response = await fetch(FREE_URL || defaultRates);
    const data = await response.json();
    res.send(data);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

module.exports = router;
