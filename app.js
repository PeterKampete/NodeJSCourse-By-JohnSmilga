const express = require("express");
const app = express();

let { people } = require("./data");

app.use(express.static("./public"));
app.use(express.urlencoded({ extended: false }));

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});
app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    res.status(200).send(`Welcome ${name}`);
    return;
  } else {
    res.status(401).send('Unauthorized');
  }
  console.log(req.body);
});

app.listen(9000, () => {
  console.log("server is running on port 9000");
});
