const Unsplash = require("unsplash-js").default;
const fetch = require("node-fetch");
global.fetch = fetch;
const express = require("express");
const router = express.Router();

const unsplash = new Unsplash({
  accessKey: "1911bed2e67cf6900e231737eb1ebabaca3168bdb5f7908087f046ff1c820fd1",
  secret: "3ecb1c1711fdc64c6711be8dfcd0ab2705bf5d1c7242e8ebc8c5665791b678a6"
});

router.get("/photos", async (req, res) => {
  try {
    unsplash.search
      .photos("Almaty", 1, 100, { orientation: "portrait" })
      .then(res => res.json())
      .then(data => {
        res.send(data);
      });
    //res.send(data);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

module.exports = router;
