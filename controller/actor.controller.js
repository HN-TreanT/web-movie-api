const db = require("../models/init-models");
const { Op } = require("sequelize");
const {
  responseInValid,
  reponseSuccess,
  responseSuccessWithData,
} = require("../helper/ResponseRequests");
const path = require("path");
const root = path.resolve("./");
const { removeDir } = require("../helper/file");
const get = async (req, res) => {
  let filter = {};
  const { search } = req.query;
  if (search) {
    filter.actor_name = { [Op.substring]: search };
  }
  const { count, rows } = await db.actors.findAndCountAll({
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
  const actor = await db.actors.findOne({ where: { actor_id: req.params.id } });
  if (!actor) return responseInValid({ res, message: "not found actor" });
  else return responseSuccessWithData({ res, data: actor });
};

const create = async (req, res) => {
  await db.actors.create(req.body);
  return reponseSuccess({ res });
};

const update = async (req, res) => {
  const actor = await db.actors.findOne({ where: { actor_id: req.params.id } });
  if (!actor) return responseInValid({ res, message: "not found actor" });
  if (req.body["avartar"] && actor.avartar && actor.avartar !== req.body["avartar"]) {
    const pathOldImage = `${root}/${actor.avartar}`;
    removeDir({ dir: pathOldImage });
  }
  await actor.update(req.body);
  return responseSuccessWithData({ res, data: actor });
};

const deleteById = async (req, res) => {
  const actor = await db.actors.findOne({ where: { actor_id: req.params.id } });
  if (!actor) return responseInValid({ res, message: "not found actor" });
  await db.actor_movie.destroy({
    where: {
      actor_id: req.params.id,
    },
  });
  await actor.destroy();
  return reponseSuccess({ res });
  // await db.actors.destroy({
  //   where: { actor_id: req.params.id },
  // });
  // await db.actor_movie.destroy({
  //   where: {
  //     actor_id: { [Op.is]: null },
  //   },
  // });
};

module.exports = {
  get,
  getById,
  create,
  update,
  deleteById,
};
