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
    filter.company_name = { [Op.substring]: search };
  }
  const { count, rows } = await db.companies.findAndCountAll({
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
  const company = await db.companies.findOne({
    where: {
      company_id: req.params.id,
    },
  });
  if (!company) return responseInValid({ res, message: "not found company" });
  return responseSuccessWithData({ res, data: company });
};
const create = async (req, res) => {
  await db.companies.create(req.body);
  return reponseSuccess({ res });
};
const update = async (req, res) => {
  const company = await db.companies.findOne({
    where: {
      company_id: req.params.id,
    },
  });
  if (!company) return responseInValid({ res, message: "not found company" });
  await company.update(req.body);
  return reponseSuccess({ res });
};
const deleteById = async (req, res) => {
  const company = await db.companies.findOne({
    where: {
      company_id: req.params.id,
    },
  });
  if (!company) return responseInValid({ res, message: "not found company" });
  await db.companies.destroy({
    where: { company_id: req.params.id },
  });
  await company.destroy();
  return reponseSuccess({ res });
};

module.exports = {
  get,
  getById,
  create,
  update,
  deleteById,
};
