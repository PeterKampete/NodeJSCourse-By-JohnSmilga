const express = require("express");
const app = express();
const {products} = require('./data')

app.get("/", (req, res) => {
  res.json(products);
  console.log(res.contentType)
});

app.listen(9000, () => {
  console.log("server is running on port 9000");
});
