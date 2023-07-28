const db = require("../models/init-models");
const { Op } = require("sequelize");
const { responseInValid, reponseSuccess, responseSuccessWithData } = require("../helper/ResponseRequests");
const path = require("path");
const root = path.resolve("./");
const { removeDir } = require("../helper/file");
const fs = require("fs");
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
  const actor = await db.actors.create(req.body);
  if (req.body["avartar"]) {
    const addTail = req.destination.concat("/", `actor-${actor.actor_id}-${req.originalname}`);
    fs.rename(req.body["avartar"], addTail, (err) => {
      if (err) console.log(err);
    });
    req.body["avartar"] = addTail;
    actor.update(req.body);
  }
  return reponseSuccess({ res });
};

const update = async (req, res) => {
  const actor = await db.actors.findOne({ where: { actor_id: req.params.id } });
  if (!actor) return responseInValid({ res, message: "not found actor" });
  if (req.body["avartar"]) {
    const pathOldImage = `${root}/${actor.avartar}`;
    if (actor.avartar && fs.existsSync(pathOldImage)) removeDir({ dir: pathOldImage });
    const addTail = req.destination.concat("/", `actor-${actor.actor_id}-${req.originalname}`);
    fs.rename(req.body["avartar"], addTail, (err) => {
      if (err) console.log(err);
    });
    req.body["avartar"] = addTail;
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
