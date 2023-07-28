const { reponseSuccess, responseInValid, responseSuccessWithData } = require("../helper/ResponseRequests");
const db = require("../models/init-models");
const { Op } = require("sequelize");
const fs = require("fs");

const get = async (req, res) => {
  const { search } = req.query;
  let filter = {};
  if (search) filter.title = { [Op.substring]: search };
  const { count, rows } = await db.movies.findAndCountAll({
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
  const fields = ["poster", "trailer"];
  const { title, description, isSeries, actors, genres, countries, directors, companies, languages } = req.body;
  const movie = await db.movies.create(
    {
      title,
      description,
      isSeries,
      actor_movie: actors
        ? actors.map((item) => {
            return { actor_id: item };
          })
        : [],
      genre_movie: genres
        ? genres.map((item) => {
            return { genre_id: item };
          })
        : [],
      country_movie: countries
        ? countries.map((item) => {
            return { country_id: item };
          })
        : [],
      director_movie: directors
        ? directors.map((item) => {
            return { director_id: item };
          })
        : [],
      company_movie: companies
        ? companies.map((item) => {
            return { company_id: item };
          })
        : [],
      language_movie: languages
        ? languages.map((item) => {
            return { language_id: item };
          })
        : [],
    },
    {
      include: [
        {
          model: db.actor_movie,
          as: "actor_movie",
        },
        {
          model: db.genre_movie,
          as: "genre_movie",
        },
        {
          model: db.country_movie,
          as: "country_movie",
        },
        {
          model: db.director_movie,
          as: "director_movie",
        },
        {
          model: db.company_movie,
          as: "company_movie",
        },
        {
          model: db.language_movie,
          as: "language_movie",
        },
      ],
    }
  );

  fields.map((field) => {
    if (req.body[field]) {
      const addTail = req.body[field].destination.concat(
        "/",
        `${field}-movie-${movie.movie_id}-${req.body[field].originalname}`
      );
      fs.rename(req.body[field].url, addTail, (err) => {
        if (err) console.log(err);
      });
      req.body[`${field}_url`] = addTail;
    }
  });
  delete req.body.poster;
  delete req.body.trailer;
  await movie.update(req.body);
  return responseSuccessWithData({ res, data: movie });
};

const update = async (req, res) => {
  const fields = ["poster", "trailer"];
  const {
    title,
    description,
    isSeries,
    view,
    vote_avg,
    vote_count,
    actors,
    genres,
    countries,
    directors,
    companies,
    languages,
  } = req.body;

  const movie = await db.movies.findOne({
    where: {
      movie_id: req.params.id,
    },
    include: [{ model: db.actor_movie, as: "actor_movie" }],
  });
  if (!movie) return responseInValid({ res, message: "not found movie" });

  if (actors) {
    for (actor_id of actors) {
      const movie_actor_old = movie.actor_movie.map((item) => parseInt(item.actor_id));
      const actor_movie = await db.actor_movie.findOne({
        where: { movie_id: movie.movie_id, actor_id: { [Op.notIn]: actors } },
      });
      if (actor_movie && !movie_actor_old.includes(parseInt(actor_id))) {
        await actor_movie.update({ actor_id: actor_id });
      }
      if (!actor_movie && !movie_actor_old.includes(parseInt(actor_id))) {
        console.log("check", actor_id);
        await db.actor_movie.create({ actor_id: actor_id, movie_id: movie.movie_id });
      }
    }
  }

  return reponseSuccess({ res });
};

const deleteById = async (req, res) => {
  const movie = await db.movies.findOne({
    where: {
      movie_id: req.params.id,
    },
  });
  if (!movie) return responseInValid({ res, message: "not foun movie" });

  await db.actor_movie.destroy({
    where: {
      movie_id: req.params.id,
    },
  });
  await db.genre_movie.destroy({
    where: {
      movie_id: req.params.id,
    },
  });
  await db.country_movie.destroy({
    where: {
      movie_id: req.params.id,
    },
  });
  await db.director_movie.destroy({
    where: {
      movie_id: req.params.id,
    },
  });
  await db.company_movie.destroy({
    where: {
      movie_id: req.params.id,
    },
  });
  await db.language_movie.destroy({
    where: {
      movie_id: req.params.id,
    },
  });
  await db.episodes.destroy({
    where: {
      movie_id: req.params.id,
    },
  });
  await db.movies.destroy({
    where: {
      movie_id: req.params.id,
    },
  });

  return reponseSuccess({ res });
};

module.exports = {
  get,
  getById,
  create,
  update,
  deleteById,
};
