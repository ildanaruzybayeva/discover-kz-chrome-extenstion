const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

const apiKey = "707f7a9d41d184115b53";
const URL = `https://free.currconv.com/api/v7/convert?q=USD_KZT,EUR_KZT&compact=ultra&apiKey=${apiKey}`;

router.get("/currency", async (req, res) => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    res.send(data);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

module.exports = router;
