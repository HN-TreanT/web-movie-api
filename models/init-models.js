const _users = require("./users.model");
function initModels() {
  const users = _users;
  return {
    users,
  };
}
const db = initModels();
module.exports = db;
