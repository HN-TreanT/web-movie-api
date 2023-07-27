const db = require("../models/init-models");
const { Op } = require("sequelize");
const {
  responseInValid,
  reponseSuccess,
  responseSuccessWithData,
} = require("../helper/ResponseRequests");

const get = async (req, res) => {
  const { search } = req.query;
  let filter = {};
  if (search) {
    filter.genre_name = { [Op.substring]: search };
  }
  const { count, rows } = await db.genres.findAndCountAll({
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
  const genre = await db.genres.findOne({ where: { genre_id: req.params.id } });
  if (!genre) {
    return responseInValid({ res, message: "not found genre" });
  }
  return responseSuccessWithData({ res, data: genre });
};
const create = async (req, res) => {
  await db.genres.create(req.body);
  return reponseSuccess({ res });
};
const update = async (req, res) => {
  const genre = await db.genres.findOne({ where: { genre_id: req.params.id } });
  if (!genre) return responseInValid({ res, message: "not gound genre" });
  await genre.update(req.body);
  return reponseSuccess({ res });
};
const deleteById = async (req, res) => {
  const genre = await db.genres.findOne({ where: { id: req.params.id } });
  if (!genre) {
    return responseInValid({ res, message: "not found genre" });
  }

  await db.genres.destroy({
    where: {
      genre_id: req.params.id,
    },
  });
  await genre.destroy();
  return reponseSuccess({ res });
};

module.exports = {
  get,
  getById,
  create,
  update,
  deleteById,
};
