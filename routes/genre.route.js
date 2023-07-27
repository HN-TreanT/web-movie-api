const Route = require("express").Router();
const genreController = require("../controller/genre.controller");
const tryCatch = require("../middleware/tryCatch");
const { requireLogin, requireRole } = require("../middleware/auth");

Route.get("/", tryCatch(genreController.get));
Route.get("/:id", tryCatch(genreController.getById));
// Route.post("/create", requireLogin, requireRole("A"), tryCatch(genreController.create));
// Route.put("/:id", requireLogin, requireRole("A"), tryCatch(genreController.update));
// Route.delete("/:id", requireLogin, requireRole("A"), tryCatch(genreController.deleteById));
Route.post("/create", tryCatch(genreController.create));
Route.put("/:id", tryCatch(genreController.update));
Route.delete("/:id", tryCatch(genreController.deleteById));

module.exports = Route;
