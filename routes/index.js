const userRoute = require("./user.route");
const authRoute = require("./auth.route");
const route = (app) => {
  app.use("/api/user", userRoute);
  app.use("/api/auth", authRoute);
};
module.exports = route;
