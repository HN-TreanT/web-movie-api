const Route = require("express").Router();
const actorController = require("../controller/actor.controller");
const tryCatch = require("../middleware/tryCatch");
const { requireLogin, requireRole } = require("../middleware/auth");
const { uploadAvartar, CheckUploadAvatar } = require("../middleware/file");
Route.get("/", tryCatch(actorController.get));
Route.get("/:id", tryCatch(actorController.getById));
Route.post(
  "/create",
  requireLogin,
  requireRole("A"),
  uploadAvartar,
  CheckUploadAvatar,
  tryCatch(actorController.create)
);
Route.put(
  "/:id",
  // requireLogin,
  // requireRole("A"),
  uploadAvartar,
  CheckUploadAvatar,
  tryCatch(actorController.update)
);
Route.delete("/:id", requireLogin, requireRole("A"), tryCatch(actorController.deleteById));
module.exports = Route;
