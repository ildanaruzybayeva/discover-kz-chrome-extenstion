const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");

app.use(cors());

app.use("/", require("./routes/weather"));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
