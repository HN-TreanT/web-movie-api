const Route = require("express").Router();
const countryController = require("../controller/country.controller");
const tryCatch = require("../middleware/tryCatch");
const { requireLogin, requireRole } = require("../middleware/auth");
Route.get("/", tryCatch(countryController.get));
Route.get("/:id", tryCatch(countryController.getById));
Route.post(
  "/create",
  //   requireLogin,
  //   requireRole('A'),
  tryCatch(countryController.create)
);
Route.put(
  "/:id",
  //   requireLogin,
  //   requireRole('A'),
  tryCatch(countryController.update)
);
Route.delete(
  "/:id",
  //   requireLogin,
  //   requireRole('A'),
  tryCatch(countryController.deleteById)
);
module.exports = Route;
