const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

//const URL = `https://free.currconv.com/api/v7/convert?q=USD_KZT,EUR_KZT&compact=ultra&apiKey=${process.env.currencyAPI}`;

router.get("/currency", async (req, res) => {
  try {
    const data = {
      USD_KZT: 415,
      EUR_KZT: 480
    };
    res.send(data);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

module.exports = router;
