const fs = require("fs");

const userData = fs.readFileSync("./public/users.json");
const users = JSON.parse(userData);
// random user
module.exports.randomUser = (req, res) => {
  const random = users[Math.floor(Math.random() * users.length)];
  res.send(random);
};
//all users

module.exports.allUsers = (req, res, next) => {
  const { limit, page } = req.query;
  res.send(users.slice(0, limit));
};

//save user

module.exports.saveUser = (req, res) => {
  const user = req.body;
  users.push(user);
  res.send(users);
};
