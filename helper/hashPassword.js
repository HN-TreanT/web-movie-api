const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);
const hashPassword = (password) => {
  const hashPassword = bcrypt.hashSync(password, salt);
  return hashPassword;
};

module.exports = hashPassword;
