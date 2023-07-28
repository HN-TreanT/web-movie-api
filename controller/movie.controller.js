const { reponseSuccess, responseInValid, responseSuccessWithData } = require("../helper/ResponseRequests");
const db = require("../models/init-models");
const { Op } = require("sequelize");

const get = async (req, res) => {};
const getById = async (req, res) => {
  const movie = await db.movies.findOne({
    where: { movie_id: req.params.id },
    include: [
      {
        model: db.actor_movie,
        as: "actor_movie",
        include: [
          {
            model: db.actors,
            as: "actors",
          },
        ],
      },
      {
        model: db.genre_movie,
        as: "genre_movie",
        include: [
          {
            model: db.genres,
            as: "genres",
          },
        ],
      },
      {
        model: db.country_movie,
        as: "country_movie",
        include: [
          {
            model: db.countries,
            as: "countries",
          },
        ],
      },

      {
        model: db.director_movie,
        as: "director_movie",
        include: [
          {
            model: db.directors,
            as: "directors",
          },
        ],
      },
      {
        model: db.company_movie,
        as: "company_movie",
        include: [
          {
            model: db.companies,
            as: "companies",
          },
        ],
      },
      {
        model: db.language_movie,
        as: "language_movie",
        include: [
          {
            model: db.languages,
            as: "languages",
          },
        ],
      },
    ],
  });
  if (!movie)
    return responseInValid({
      res,
      message: "not found movie",
    });
  return responseSuccessWithData({
    res,
    data: movie,
  });
};
const create = async (req, res) => {
  const { title, description, poster_url, trailer_url, isSeries } = req.body;
  console.log("Check poster_url", poster_url);
  console.log("check trailer_url", trailer_url);
  // const movie = await db.movies.create({
  //   title: title,
  //   description: description,
  //   poster_url: poster_url,
  //   trailer_url: trailer_url,
  //   isSeries: isSeries,
  // });
  // if (req.body.actors)
  //   await db.actor_movie.bulkCreate(
  //     req.body.actors.map((item) => {
  //       return {
  //         actor_id: item,
  //         movie_id: movie.movie_id,
  //       };
  //     })
  //   );
  // if (req.body.genres)
  //   await db.genre_movie.bulkCreate(
  //     req.body.genres.map((item) => {
  //       return {
  //         genre_id: item,
  //         movie_id: movie.movie_id,
  //       };
  //     })
  //   );
  // if (req.body.countries)
  //   await db.country_movie.bulkCreate(
  //     req.body.countries.map((item) => {
  //       return {
  //         country_id: item,
  //         movie_id: movie.movie_id,
  //       };
  //     })
  //   );
  // if (req.body.directors)
  //   await db.director_movie.bulkCreate(
  //     req.body.directors.map((item) => {
  //       return {
  //         director_id: item,
  //         movie_id: movie.movie_id,
  //       };
  //     })
  //   );
  // if (req.body.companies)
  //   await db.company_movie.bulkCreate(
  //     req.body.companies.map((item) => {
  //       return {
  //         company_id: item,
  //         movie_id: movie.movie_id,
  //       };
  //     })
  //   );
  // if (req.body.languages)
  //   await db.language_movie.bulkCreate(
  //     req.body.languages.map((item) => {
  //       return {
  //         language_id: item,
  //         movie_id: movie.movie_id,
  //       };
  //     })
  //   );

  // return reponseSuccess({ res });
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
