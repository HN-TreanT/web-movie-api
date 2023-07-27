const Route = require("express").Router();
const tryCatch = require("../middleware/tryCatch");
const { requireLogin, requireRole } = require("../middleware/auth");
const directorController = require("../controller/director.controller");
Route.get("/", tryCatch(directorController.get));
Route.get("/:id", tryCatch(directorController.getById));
Route.post(
  "/create",
  // requireLogin,
  // requireRole('A'),
  tryCatch(directorController.create)
);
Route.put(
  "/:id",
  // requireLogin,
  // requireRole('A'),
  tryCatch(directorController.update)
);
Route.delete(
  "/:id",
  // requireLogin,
  // requireRole('A'),
  tryCatch(directorController.deleteById)
);
module.exports = Route;
