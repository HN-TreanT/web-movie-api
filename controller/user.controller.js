const db = require("../models/init-models");

const getAll = async (req, res) => {
  const users = await db.users.findAll();
  res.send(users);
};

module.exports = {
  getAll,
};
