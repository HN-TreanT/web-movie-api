const Route = require("express").Router();
const userController = require("../controller/user.controller");
const tryCatch = require("../middleware/tryCatch");
const { requireLogin, requireRole } = require("../middleware/auth");
const db = require("../models/init-models");

Route.get("/", requireLogin, requireRole("A"), tryCatch(userController.get));
Route.get("/me", requireLogin, tryCatch(userController.getMe));
Route.get("/:id", requireLogin, requireRole("A"), tryCatch(userController.getUserById));
Route.delete("/:id", requireLogin, requireRole("A"), tryCatch(userController.deleteById));
Route.put("/:id", requireLogin, requireRole("A"), tryCatch(userController.update));
Route.post("/change-password", requireLogin, tryCatch(userController.changePassword));
Route.post("/forget-password/:email", tryCatch(userController.forgetPassword));

module.exports = Route;
