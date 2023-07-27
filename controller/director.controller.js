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
    filter.director_name = { [Op.substring]: search };
  }
  const { count, rows } = await db.directors.findAndCountAll({
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
  const director = await db.directors.findOne({
    where: {
      director_id: req.params.id,
    },
  });
  if (!director) return responseInValid({ res, message: "not found director" });
  return responseSuccessWithData({ res, data: director });
};
const create = async (req, res) => {
  await db.directors.create(req.body);
  return reponseSuccess({ res });
};
const update = async (req, res) => {
  const director = await db.directors.findOne({
    where: {
      director_id: req.params.id,
    },
  });
  if (!director) return responseInValid({ res, message: "not found director" });
  await director.update(req.body);
  return reponseSuccess({ res });
};
const deleteById = async (req, res) => {
  const director = await db.directors.findOne({
    where: {
      director_id: req.params.id,
    },
  });
  if (!director) return responseInValid({ res, message: "not found director" });
  await db.directors.destroy({
    where: { director_id: req.params.id },
  });
  await director.destroy();
  return reponseSuccess({ res });
};

module.exports = {
  get,
  getById,
  create,
  update,
  deleteById,
};
