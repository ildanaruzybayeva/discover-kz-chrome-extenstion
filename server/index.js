const http = require("http");
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
app.use("/", require("./routes/news"));
app.use("/", require("./routes/quotes"));

app.get("/", (req, res) => {
  res.send(
    "The server is running. Available routes: /weather /photos /news /currency /quotes"
  );
});

app.use((req, res, next) => {
  res.status(404).send("<h1>Page not found</h1>");
});

server.listen(process.env.PORT || 8000, () =>
  console.log(`Server has started on port 8000.`)
);
