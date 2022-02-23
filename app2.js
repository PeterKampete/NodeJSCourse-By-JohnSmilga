const express = require("express");
const app = express();
const morgan = require("morgan");
const logger = require("./logger");
const authorize = require("./authorize");
// app.use([authorize, logger]);
// req => middleware => res;

app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("Home");
});
app.get("/about", (req, res) => {
  res.send("About");
});
app.get("/api/products", (req, res) => {
  res.send("ProductsItems");
});
app.get("/api/items", (req, res) => {
  res.send("About");
});

app.listen(9000, () => {
  console.log("server is running on port 9000");
});
