const Route = require("express").Router();
const userController = require("../controller/user.controller");
const tryCatch = require("../middleware/tryCatch");

Route.get("/", tryCatch(userController.getAll));
module.exports = Route;
