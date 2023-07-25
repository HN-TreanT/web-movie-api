const db = require("../models/init-models");
const security = require("../utils/security");

const {
  responseInValid,
  responseSuccessWithData,
  reponseSuccess,
  responseServerError,
} = require("../helper/ResponseRequests");
const bcrypt = require("bcryptjs");
const hashPassword = require("../helper/hashPassword");

const login = async (req, res) => {
  const { username, password } = req.body;
  const user = await db.users.findOne({ where: { username: username } });
  if (!user) return responseInValid({ res, message: "user not found" });
  const check = bcrypt.compareSync(password, user.password);
  if (!check) return responseInValid({ res, message: "password incorrect" });
  const token = security.generateToken(
    {
      username: user.dataValues.username,
      role_id: user.dataValues.role_id,
      user_id: user.dataValues.user_id,
    },
    "3000s"
  );
  const refreshToken = security.generateRFToken(
    {
      username: user.dataValues.username,
      role_id: user.dataValues.role_id,
      user_id: user.dataValues.user_id,
    },
    "300d"
  );
  try {
    user.update({
      refresh_token: refreshToken,
    });
    return res.status(200).json({
      status: true,
      message: "success",
      accessToken: token,
      refreshToken: refreshToken,
      data: user,
    });
  } catch (err) {
    return responseServerError({ res, err: err.message });
  }
};

const signup = async (req, res) => {
  const username = await db.users.findOne({ where: { username: req.body.username } });
  const email = await db.users.findOne({ where: { email: req.body.email } });
  if (username || email) {
    return responseInValid({ res, message: "user already exists" });
  }
  const new_password = hashPassword(req.body.password);
  const data = await db.users.create({ ...req.body, password: new_password });
  return responseSuccessWithData({ res, data: data });
};

const refresh = async (req, res) => {
  const data = security.verifyRFToken(req.body.refresh_token);
  const token = security.generateToken(data, "300s");
  return responseSuccessWithData({
    res,
    data: {
      new_token: token,
    },
  });
};

module.exports = {
  login,
  signup,
  refresh,
};
