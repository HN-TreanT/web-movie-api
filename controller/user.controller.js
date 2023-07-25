const { Op } = require("sequelize");
const {
  responseSuccessWithData,
  responseInValid,
  reponseSuccess,
} = require("../helper/ResponseRequests");
const db = require("../models/init-models");
const bcrypt = require("bcryptjs");
const hashPassword = require("../helper/hashPassword");
const { PasswordMail } = require("../services/mail");
const generateRandomString = require("../helper/generateRandomString");

const get = async (req, res) => {
  const { search } = req.query;
  let filter = {};
  if (search) {
    filter.username = { [Op.substring]: search };
  }
  const { count, rows } = await db.users.findAndCountAll({
    where: {
      ...filter,
    },
    // order: [["user_id", "DESC"]],
    ...req.pagination,
  });
  return res.status(200).json({
    status: true,
    total: count,
    data: rows,
  });
};

const getMe = async (req, res) => {
  const user = await db.users.findOne({ where: { ...req.user } });
  if (!user) {
    return res.status(401).send("Unauthorized");
  } else {
    return responseSuccessWithData({ res, data: user });
  }
};

const getUserById = async (req, res) => {
  const user = await db.users.findOne({
    where: {
      user_id: req.params.id,
    },
  });
  if (!user) {
    return responseInValid({ res, message: "not found user" });
  }
  return responseSuccessWithData({ res, data: user });
};

const deleteById = async (req, res) => {
  const user = await db.users.findOne({
    where: {
      user_id: req.params.id,
    },
  });
  if (!user) {
    return responseInValid({ res, message: "not found user" });
  }
  await db.users.destroy({
    where: {
      user_id: req.params.id,
    },
  });
  return reponseSuccess({ res });
};

const update = async (req, res) => {
  const user = await db.users.findOne({ where: { user_id: req.params.id } });
  if (!user) {
    return responseInValid({ res, message: "not found user" });
  }
  user.update(req.body);
  return responseSuccessWithData({ res, data: user });
};

const changePassword = async (req, res) => {
  const { newPassword, oldPassword } = req.body;
  const user = await db.users.findOne({ where: req.user });
  if (!user) return responseInValid({ res, message: "not found user" });
  let check = bcrypt.compareSync(oldPassword, user.password);
  if (!check) return responseInValid({ res, message: "password incorrect" });
  const newPasswordHash = hashPassword(newPassword);
  user.password = newPasswordHash;
  await user.save();
  return reponseSuccess({ res });
};

const forgetPassword = async (req, res) => {
  const { email } = req.params;
  const user = await db.users.findOne({ where: { email: email } });
  if (!user) return responseInValid({ res, message: "not found user" });
  const new_password = generateRandomString(6);
  const hashNewPassword = hashPassword(new_password);
  await user.update({
    password: hashNewPassword,
  });
  PasswordMail(new_password, email);
  return reponseSuccess({ res });
};
module.exports = {
  get,
  getMe,
  deleteById,
  update,
  changePassword,
  forgetPassword,
  getUserById,
};
