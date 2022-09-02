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
//update a user

module.exports.updateUser = (req, res) => {
  const { id } = req.params;
  const updateUser = users.find((user) => user?.id === Number(id));

  updateUser.id = id;
  updateUser.name = req.body.name;
  updateUser.gender = req.body.gender;
  updateUser.address = req.body.address;
  updateUser.photoUrl = req.body.photoUrl;
  updateUser.contact = req.body.contact;
  res.send(updateUser);
};
// delete user

module.exports.deleteUser = (req, res) => {
  const { id } = req.params;
  const deleteUser = users.filter((user) => user.id !== Number(id));
  res.send(deleteUser);
};
