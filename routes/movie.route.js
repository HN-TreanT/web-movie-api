const Route = require("express").Router();
const { requireRole, requireLogin } = require("../middleware/auth");
const tryCatch = require("../middleware/tryCatch");
const movieController = require("../controller/movie.controller");
const { mutipleUploadMovie, CheckMutipleUploadMovie } = require("../middleware/file");

Route.get("/", tryCatch(movieController.get));
Route.get("/:id", tryCatch(movieController.getById));
Route.post(
  "/create",
  //   mutipleUploadMovie,
  //   CheckMutipleUploadMovie,
  // requireLogin,requireRole
  tryCatch(movieController.create)
);
Route.put(
  "/:id",
  // requireLogin,requireRole,
  tryCatch(movieController.update)
);
Route.delete(
  "/:id",
  // requireLogin,requireRole
  tryCatch(movieController.deleteById)
);

module.exports = Route;
