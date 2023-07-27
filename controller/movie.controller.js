const {
  reponseSuccess,
  responseInValid,
  responseSuccessWithData,
} = require("../helper/ResponseRequests");
const db = require("../models/init-models");
const { Op } = require("sequelize");

const get = async (req, res) => {};
const getById = async (req, res) => {};
const create = async (req, res) => {
  const { title, description, poster_url, trailer_url, isSeries } = req.body;
  const movie = await db.movies.create({
    title: title,
    description: description,
    poster_url: poster_url,
    trailer_url: trailer_url,
    isSeries: isSeries,
  });
  if (req.body.actors)
    await db.actor_movie.bulkCreate(
      req.body.actors.map((item) => (item) => {
        return {
          actor_id: item,
          movie_id: movie.movie_id,
        };
      })
    );
  if (req.body.genres)
    await db.genre_movie.bulkCreate(
      req.body.genres.map((item) => (item) => {
        return {
          genre_id: item,
          movie_id: movie.movie_id,
        };
      })
    );
  if (req.body.countries)
    await db.country_movie.bulkCreate(
      req.body.countries.map((item) => (item) => {
        return {
          country_id: item,
          movie_id: movie.movie_id,
        };
      })
    );
  if (req.body.directors)
    await db.director_movie.bulkCreate(
      req.body.directors.map((item) => (item) => {
        return {
          director_id: item,
          movie_id: movie.movie_id,
        };
      })
    );
  if (req.body.companies)
    await db.company_movie.bulkCreate(
      req.body.companies.map((item) => (item) => {
        return {
          company_id: item,
          movie_id: movie.movie_id,
        };
      })
    );
  if (req.body.languages)
    await db.language_movie.bulkCreate(
      req.body.languages.map((item) => (item) => {
        return {
          language_id: item,
          movie_id: movie.movie_id,
        };
      })
    );

  return reponseSuccess({ res });
};
const update = async (req, res) => {};
const deleteById = async (req, res) => {};

module.exports = {
  get,
  getById,
  create,
  update,
  deleteById,
};
