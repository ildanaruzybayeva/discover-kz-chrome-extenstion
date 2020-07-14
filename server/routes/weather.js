const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

const city = "Almaty";
const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.weatherAPI}&units=metric`;

router.get("/weather", async (req, res) => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    res.send(data);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
