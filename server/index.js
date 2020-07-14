const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

app.use(cors());

app.use("/", require("./routes/weather"));
app.use("/", require("./routes/unsplash"));
app.use("/", require("./routes/currency"));

app.get("/", (req, res) => {
  res.send("Hello KZ!");
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
