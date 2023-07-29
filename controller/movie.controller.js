const { reponseSuccess, responseInValid, responseSuccessWithData } = require("../helper/ResponseRequests");
const db = require("../models/init-models");
const { Op, where } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { removeDir } = require("../helper/file");
const root = path.resolve("./");

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
  const { title, description, isSeries, actors, genres, countries, directors, companies, languages } = req.body;

  const movie = await db.movies.findOne({
    where: {
      movie_id: req.params.id,
    },
    include: [
      { model: db.actor_movie, as: "actor_movie" },
      { model: db.genre_movie, as: "genre_movie" },
      { model: db.country_movie, as: "country_movie" },
      { model: db.director_movie, as: "director_movie" },
      { model: db.company_movie, as: "company_movie" },
      { model: db.language_movie, as: "language_movie" },
    ],
  });
  if (!movie) return responseInValid({ res, message: "not found movie" });

  fields.map((field) => {
    if (req.body[field]) {
      const oldUrl = `${root}/${movie[`${field}_url`]}`;
      const addTail = req.body[field].destination.concat(
        "/",
        `${field}-movie-${movie.movie_id}-${req.body[field].originalname}`
      );
      fs.rename(req.body[field].url, addTail, (err) => {
        if (err) console.log(err);
      });
      if (fs.existsSync(oldUrl)) removeDir({ dir: oldUrl });
      req.body[`${field}_url`] = addTail;
    }
  });

  await movie.update({
    title,
    description,
    isSeries,
    poster_url: req.body.poster_url,
    trailer: req.body.trailer_url,
  });

  //actor
  const movie_actor_old = movie.actor_movie.map((item) => parseInt(item.actor_id));
  const movie_actor_new = actors.map((item) => parseInt(item));
  const checkCompare_actor = JSON.stringify(movie_actor_new) === JSON.stringify(movie_actor_old);
  if (actors && !checkCompare_actor) {
    const data = actors.map((item) => {
      return { movie_id: movie.movie_id, actor_id: item };
    });
    await db.actor_movie.destroy({ where: { movie_id: movie.movie_id } });
    await db.actor_movie.bulkCreate(data);
  }

  //genre
  const movie_genre_old = movie.genre_movie.map((item) => parseInt(item.genre_id));
  const movie_genre_new = genres.map((item) => parseInt(item));
  const checkCompare_genre = JSON.stringify(movie_genre_new) === JSON.stringify(movie_genre_old);
  if (genres && !checkCompare_genre) {
    const data = genres.map((item) => {
      return { movie_id: movie.movie_id, genre_id: item };
    });
    await db.genre_movie.destroy({ where: { movie_id: movie.movie_id } });
    await db.genre_movie.bulkCreate(data);
  }

  //country
  const movie_country_old = movie.country_movie.map((item) => parseInt(item.country_id));
  const movie_country_new = countries.map((item) => parseInt(item));
  const checkCompare_country = JSON.stringify(movie_country_new) === JSON.stringify(movie_country_old);
  if (countries && !checkCompare_country) {
    const data = countries.map((item) => {
      return { movie_id: movie.movie_id, country_id: item };
    });
    await db.country_movie.destroy({ where: { movie_id: movie.movie_id } });
    await db.country_movie.bulkCreate(data);
  }

  //director
  const movie_director_old = movie.director_movie.map((item) => parseInt(item.director_id));
  const movie_director_new = directors.map((item) => parseInt(item));
  const checkCompare_director = JSON.stringify(movie_director_new) === JSON.stringify(movie_director_old);
  if (directors && !checkCompare_director) {
    const data = directors.map((item) => {
      return { movie_id: movie.movie_id, director_id: item };
    });
    await db.director_movie.destroy({ where: { movie_id: movie.movie_id } });
    await db.director_movie.bulkCreate(data);
  }

  //company
  const movie_company_old = movie.company_movie.map((item) => parseInt(item.company_id));
  const movie_company_new = companies.map((item) => parseInt(item));
  const checkCompare_company = JSON.stringify(movie_company_new) === JSON.stringify(movie_company_old);
  if (companies && !checkCompare_company) {
    const data = companies.map((item) => {
      return { movie_id: movie.movie_id, company_id: item };
    });
    await db.company_movie.destroy({ where: { movie_id: movie.movie_id } });
    await db.company_movie.bulkCreate(data);
  }

  //language
  const movie_language_old = movie.language_movie.map((item) => parseInt(item.language_id));
  const movie_language_new = languages.map((item) => parseInt(item));
  const checkCompare_language = JSON.stringify(movie_language_new) === JSON.stringify(movie_language_old);
  if (languages && !checkCompare_language) {
    const data = languages.map((item) => {
      return { movie_id: movie.movie_id, language_id: item };
    });
    await db.language_movie.destroy({ where: { movie_id: movie.movie_id } });
    await db.language_movie.bulkCreate(data);
  }

  // //actor
  // if (actors) {
  //   await db.actor_movie.destroy({ movie_id: movie.movie_id });
  //   await db.actor_movie.bulkCreate();
  //   for (actor_id of actors) {
  //     const movie_actor_old = movie.actor_movie.map((item) => parseInt(item.actor_id));
  //     const actor_movie = await db.actor_movie.findOne({
  //       where: { movie_id: movie.movie_id, actor_id: { [Op.notIn]: actors } },
  //     });
  //     if (actor_movie && !movie_actor_old.includes(parseInt(actor_id))) {
  //       await actor_movie.update({ actor_id: actor_id });
  //     }
  //     if (!actor_movie && !movie_actor_old.includes(parseInt(actor_id))) {
  //       await db.actor_movie.create({ actor_id: actor_id, movie_id: movie.movie_id });
  //     }
  //   }
  // }

  // //genres
  // if (genres) {
  //   for (genre_id of genres) {
  //     const movie_genre_old = movie.genre_movie.map((item) => parseInt(item.genre_id));
  //     const genre_movie = await db.genre_movie.findOne({
  //       where: { movie_id: movie.movie_id, genre_id: { [Op.notIn]: genres } },
  //     });
  //     if (genre_movie && !movie_genre_old.includes(parseInt(genre_id))) {
  //       await genre_movie.update({ genre_id: genre_id });
  //     }
  //     if (!genre_movie && !movie_genre_old.includes(parseInt(genre_id))) {
  //       await db.actor_movie.create({ genre_id: genre_id, movie_id: movie.movie_id });
  //     }
  //   }
  // }

  // //country
  // if (countries) {
  //   for (country_id of countries) {
  //     const movie_country_old = movie.country_movie.map((item) => parseInt(item.country_id));
  //     const country_movie = await db.country_movie.findOne({
  //       where: { movie_id: movie.movie_id, country_id: { [Op.notIn]: countries } },
  //     });
  //     if (country_movie && !movie_country_old.includes(parseInt(country_id))) {
  //       await country_movie.update({ country_id: country_id });
  //     }
  //     if (!country_movie && !movie_country_old.includes(parseInt(country_id))) {
  //       await db.country_movie.create({ country_id: country_id, movie_id: movie.movie_id });
  //     }
  //   }
  // }
  // //director
  // if (directors) {
  //   for (director_id of directors) {
  //     const movie_director_old = movie.director_movie.map((item) => parseInt(item.director_id));
  //     const director_movie = await db.director_movie.findOne({
  //       where: { movie_id: movie.movie_id, director_id: { [Op.notIn]: directors } },
  //     });
  //     if (director_movie && !movie_director_old.includes(parseInt(director_id))) {
  //       await director_movie.update({ director_id: director_id });
  //     }
  //     if (!director_movie && !movie_director_old.includes(parseInt(director_id))) {
  //       await db.director_movie.create({ director_id: director_id, movie_id: movie.movie_id });
  //     }
  //   }
  // }
  // ///company
  // if (companies) {
  //   for (company_id of companies) {
  //     const movie_company_old = movie.company_movie.map((item) => parseInt(item.company_id));
  //     const company_movie = await db.company_movie.findOne({
  //       where: { movie_id: movie.movie_id, company_id: { [Op.notIn]: companies } },
  //     });
  //     if (company_movie && !movie_company_old.includes(parseInt(company_id))) {
  //       await company_movie.update({ company_id: company_id });
  //     }
  //     if (!company_movie && !movie_company_old.includes(parseInt(company_id))) {
  //       await db.company_movie.create({ company_id: company_id, movie_id: movie.movie_id });
  //     }
  //   }
  // }

  // ///language
  // if (languages) {
  //   for (language_id of languages) {
  //     const movie_language_old = movie.language_movie.map((item) => parseInt(item.language_id));
  //     const language_movie = await db.language_movie.findOne({
  //       where: { movie_id: movie.movie_id, language_id: { [Op.notIn]: languages } },
  //     });
  //     if (language_movie && !movie_language_old.includes(parseInt(language_id))) {
  //       await language_movie.update({ language_id: language_id });
  //     }
  //     if (!language_movie && !movie_language_old.includes(parseInt(language_id))) {
  //       await db.language_movie.create({ language_id: language_id, movie_id: movie.movie_id });
  //     }
  //   }
  // }

  return reponseSuccess({ res });
};

const updateVoteAndView = async (req, res) => {
  const { vote_avg, view, vote_count } = req.body;
  const movie = await db.movies.findOne({ where: { movie_id: req.params.id } });
  if (!movie) return responseInValid({ res, message: "not found movie" });
  const new_vote_avg = (movie.vote_avg * movie.vote_count + vote_avg) / vote_count;
  await movie.update({
    view: view,
    vote_avg: parseFloat(new_vote_avg.toFixed(2)),
    vote_count: vote_count,
  });
  return responseSuccessWithData({ res, data: movie });
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
  updateVoteAndView,
};
