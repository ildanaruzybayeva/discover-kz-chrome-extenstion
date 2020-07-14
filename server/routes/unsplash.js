const Unsplash = require("unsplash-js").default;
const fetch = require("node-fetch");
global.fetch = fetch;
const express = require("express");
const router = express.Router();

const unsplash = new Unsplash({
  accessKey: process.env.accessKey,
  secret: process.env.secret
});

router.get("/photos", async (req, res) => {
  try {
    // unsplash.search
    //   .photos("Almaty", 1, 100, { orientation: "portrait" })
    unsplash.collections
      .getCollectionPhotos(9511364, 1, 55, "latest")
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

unsplash.users.collections("naoufal", 2, 15, "updated");
module.exports = router;
