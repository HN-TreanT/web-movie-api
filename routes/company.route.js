const Route = require("express").Router();
const tryCatch = require("../middleware/tryCatch");
const { requireLogin, requireRole } = require("../middleware/auth");
const companyController = require("../controller/company.controller");
Route.get("/", tryCatch(companyController.get));
Route.get("/:id", tryCatch(companyController.getById));
Route.post(
  "/create",
  //  requireLogin, requireRole,
  tryCatch(companyController.create)
);

Route.put(
  "/:id",
  //  requireLogin, requireRole,
  tryCatch(companyController.update)
);
Route.delete(
  "/:id",
  //  requireLogin, requireRole,
  tryCatch(companyController.deleteById)
);
module.exports = Route;
