const http = require('http');
const express = require("express");
const app = express();
const server = http.createServer(app);
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

server.listen(process.env.PORT || 8000, () => console.log(`Server has started on port 8000.`));