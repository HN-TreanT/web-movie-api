const Route = require("express").Router();
const authController = require("../controller/auth.controller");
const tryCatch = require("../middleware/tryCatch");

Route.post("/login", tryCatch(authController.login));
Route.post("/signup", tryCatch(authController.signup));
Route.post("/refresh", tryCatch(authController.refresh));
module.exports = Route;
