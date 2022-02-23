const { people, products } = require("./data");

const authorize = (req, res, next) => {
  const { user } = req.query;
  console.log(user);
  if (user === "john") {
    console.log(`hello ${user}`);
    req.user = { name: "peter", id: "1" };
    console.log(req.user);
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
};
module.exports = authorize;
