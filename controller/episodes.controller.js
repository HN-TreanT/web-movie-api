const { responseInValid, responseSuccessWithData, reponseSuccess } = require("../helper/ResponseRequests");
const { Op } = require("sequelize");
const fs = require("fs");
const db = require("../models/init-models");
const { removeDir } = require("../helper/file");
const path = require("path");
const root = path.resolve("./");
const get = async (req, res) => {
  const { movie_id } = req.query;
  let filter = {};
  if (movie_id) {
    filter.movie_id = movie_id;
  }

  const { count, rows } = await db.episodes.findAndCountAll({
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
  const episodes = await db.episodes.findOne({
    where: {
      episodes_id: req.params.id,
    },
  });
  if (!episodes) return responseInValid({ res, message: "not found episodes" });
  return responseSuccessWithData({ res, data: episodes });
};
const create = async (req, res) => {
  const episodes = req.body.data;
  const files = req.body.video;
  if (!episodes) {
    return responseInValid({ res, message: "not found data" });
  }

  const data = episodes.map((episode, index) => {
    let addTail;
    if (files) {
      addTail = files[index].destination.concat(
        "/",
        `video-movie${req.body.movie_id}-episode${episode.episode}-${files[index].originalname}`
      );

      fs.rename(files[index].path, addTail, (err) => {
        if (err) console.log(err);
      });
    }
    return {
      ...episode,
      movie_id: req.body.movie_id,
      url_video: addTail,
    };
  });
  await db.episodes.bulkCreate(data);
  return reponseSuccess({ res });
};
const update = async (req, res) => {
  const file = req.body.video;
  let addTail;
  const episode = await db.episodes.findOne({ where: { episodes_id: req.params.id } });
  if (!episode) {
    if (file) removeDir({ dir: `${root}/${file[0].path}` });
    return responseInValid({ res, message: "not found episode" });
  }
  if (file) {
    const oldPath = `${root}/${episode.url_video}`;
    addTail = file[0].destination.concat(
      "/",
      `video-movie${episode.movie_id}-episode${req.body.episode ? req.body.episode : episode.episode}-${
        file[0].originalname
      }`
    );
    fs.rename(file[0].path, addTail, (err) => {
      if (err) console.log(err);
    });
    if (fs.existsSync(oldPath)) {
      removeDir({ dir: oldPath });
    }
  }
  await episode.update({ ...req.body, url_video: addTail });
  return responseSuccessWithData({ res, data: episode });
};
const deleteById = async (req, res) => {
  const episodes = await db.episodes.findOne({
    where: { episodes_id: req.params.id },
  });
  if (!episodes) return responseInValid({ res, message: "not found episodes" });
  await episodes.destroy();
  return reponseSuccess({ res });
};

module.exports = {
  get,
  getById,
  create,
  update,
  deleteById,
};
