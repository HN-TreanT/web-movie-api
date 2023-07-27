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
    filter.country_name = { [Op.substring]: search };
  }
  const { count, rows } = await db.countries.findAndCountAll({
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
  const country = await db.countries.findOne({
    where: {
      country_id: req.params.id,
    },
  });
  if (!country) return responseInValid({ res, message: "not found country" });
  return responseSuccessWithData({ res, data: country });
};
const create = async (req, res) => {
  await db.countries.create(req.body);
  return reponseSuccess({ res });
};
const update = async (req, res) => {
  const country = await db.countries.findOne({
    where: {
      country_id: req.params.id,
    },
  });
  if (!country) return responseInValid({ res, message: "not found country" });
  await country.update(req.body);
  return reponseSuccess({ res });
};
const deleteById = async (req, res) => {
  const country = await db.countries.findOne({
    where: {
      country_id: req.params.id,
    },
  });
  if (!country) return responseInValid({ res, message: "not found country" });
  await db.country_movie.destroy({
    where: {
      country_id: req.params.id,
    },
  });
  await country.destroy();
  return reponseSuccess({ res });
};

module.exports = {
  get,
  getById,
  create,
  update,
  deleteById,
};
