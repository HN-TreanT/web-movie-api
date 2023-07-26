const userRoute = require("./user.route");
const authRoute = require("./auth.route");
const actorRoute = require("./actor.route");
const route = (app) => {
  app.use("/api/user", userRoute);
  app.use("/api/auth", authRoute);
  app.use("/api/actor", actorRoute);
};
module.exports = route;
