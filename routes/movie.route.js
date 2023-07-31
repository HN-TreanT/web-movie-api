const Route = require("express").Router();
const { requireRole, requireLogin } = require("../middleware/auth");
const tryCatch = require("../middleware/tryCatch");
const movieController = require("../controller/movie.controller");
const { mutipleUploadMovie, CheckMutipleUploadMovie } = require("../middleware/file");

Route.get("/", tryCatch(movieController.get));
Route.get("/top-view", tryCatch(movieController.getTopView));
Route.get("/top-rating", tryCatch(movieController.getTopRating));
Route.get("/:id", tryCatch(movieController.getById));
Route.post(
  "/create",
  // requireLogin,requireRole
  mutipleUploadMovie,
  CheckMutipleUploadMovie,
  tryCatch(movieController.create)
);
Route.put("/:id", mutipleUploadMovie, CheckMutipleUploadMovie, tryCatch(movieController.update));
Route.put("/vote_view/:id", tryCatch(movieController.updateVoteAndView));
Route.delete(
  "/:id",
  // requireLogin,requireRole
  tryCatch(movieController.deleteById)
);

module.exports = Route;
