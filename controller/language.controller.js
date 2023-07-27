const db = require("../models/init-models");
const {
  responseInValid,
  reponseSuccess,
  responseSuccessWithData,
} = require("../helper/ResponseRequests");
const { Op } = require("sequelize");

const get = async (req, res) => {
  const { search } = req.query;
  let filter = {};
  if (search) {
    filter.name = { [Op.substring]: search };
  }
  const { count, rows } = await db.languages.findAndCountAll({
    where: {
      ...filter,
    },
    ...req.pagination,
  });
  return res.status(200).json({
    status: true,
    message: "success",
    total: count,
    data: rows,
  });
};
const getById = async (req, res) => {
  const language = await db.languages.findOne({
    where: {
      language_id: req.params.id,
    },
  });
  if (!language) return responseInValid({ res, message: "not found language" });
  return responseSuccessWithData({ res, data: language });
};
const create = async (req, res) => {
  await db.languages.create(req.body);
  return reponseSuccess({ res });
};
const update = async (req, res) => {
  const language = await db.languages.findOne({
    where: {
      language_id: req.params.id,
    },
  });
  if (!language) return responseInValid({ res, message: "not found language" });
  await language.update(req.body);
  return reponseSuccess({ res });
};
const deleteById = async (req, res) => {
  const language = await db.languages.findOne({
    where: {
      language_id: req.params.id,
    },
  });
  if (!language) return responseInValid({ res, message: "not found language" });
  await db.languages.destroy({
    where: { language_id: req.params.id },
  });
  await language.destroy();
  return reponseSuccess({ res });
};
module.exports = {
  get,
  getById,
  create,
  update,
  deleteById,
};
