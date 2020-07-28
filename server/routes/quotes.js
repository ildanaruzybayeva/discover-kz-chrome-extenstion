const express = require("express");
const router = express.Router();
const client = require("../config/db");

router.get("/quotes", async (req, res) => {
  try {
    const sql = "SELECT * FROM quotes";
    const result = await client.query(sql);
    res.send(result.rows);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

module.exports = router;
