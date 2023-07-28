const Route = require("express").Router();
const { requireLogin, requireRole } = require("../middleware/auth");
const tryCatch = require("../middleware/tryCatch");
const espisodesController = require("../controller/espisodes.controller");
Route.get("/", tryCatch(espisodesController.get));
Route.get("/:id", tryCatch(espisodesController.getById));
Route.post(
  "/create",
  // requireLogin,requireRole
  tryCatch(espisodesController.create)
);
Route.put(
  "/:id",
  // requireLogin,requireRole,
  tryCatch(espisodesController.update)
);
Route.delete(
  "/:id",
  // requireLogin,requireRole,
  tryCatch(espisodesController.deleteById)
);
module.exports = Route;
