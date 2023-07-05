const _movie = require("./movie.model");
const __episodes = require("./episodes.model");
const _actor = require("./actor.model");
const _company = require("./company.model");
const _genre = require("./genre.model");
const _director = require("./director.model");
const _language = require("./language.model");
const _country = require("./country.model");
const _actor_movie = require("./actor-movie.model");
const _company_movie = require("./company-movie.model");
const _genre_movie = require("./genre-movie.model");
const _director_movie = require("./director-movie.model");
const _language_movie = require("./language-movie.model");
const _country_movie = require("./country_movie.model");
function initModels() {
  const movies = _movie;
  const episodes = __episodes;
  const actors = _actor;
  const companies = _company;
  const genres = _genre;
  const directors = _director;
  const languages = _language;
  const countries = _country;
  const actor_movie = _actor_movie;
  const company_movie = _company_movie;
  const genre_movie = _genre_movie;
  const director_movie = _director_movie;
  const language_movie = _language_movie;
  const country_movie = _country_movie;

  movies.hasMany(episodes, { as: "episodes", foreignKey: "movie_id" });
  episodes.belongsTo(movies, { as: "movies", foreignKey: "movie_id" });

  movies.hasMany(actor_movie, { as: "actor_movie", foreignKey: "movie_id" });
  actor_movie.belongsTo(movies, { as: "movies", foreignKey: "movie_id" });
  actors.hasMany(actor_movie, { as: "actor_movie", foreignKey: "actor_id" });
  actor_movie.belongsTo(actors, { as: "actors", foreignKey: "actor_id" });

  movies.hasMany(company_movie, { as: "company_movie", foreignKey: "movie_id" });
  company_movie.belongsTo(movies, { as: "movies", foreignKey: "movie_id" });
  companies.hasMany(company_movie, { as: "company_movie", foreignKey: "company_id" });
  company_movie.belongsTo(companies, { as: "companies", foreignKey: "company_id" });

  movies.hasMany(genre_movie, { as: "genre_movie", foreignKey: "movie_id" });
  genre_movie.belongsTo(movies, { as: "movies", foreignKey: "movie_id" });
  genres.hasMany(genre_movie, { as: "genre_movie", foreignKey: "genre_id" });
  genre_movie.belongsTo(genres, { as: "genres", foreignKey: "genre_id" });

  movies.hasMany(director_movie, { as: "director_movie", foreignKey: "movie_id" });
  director_movie.belongsTo(movies, { as: "movies", foreignKey: "movie_id" });
  directors.hasMany(director_movie, { as: "director_movie", foreignKey: "director_id" });
  director_movie.belongsTo(directors, { as: "directors", foreignKey: "director_id" });

  movies.hasMany(language_movie, { as: "language_movie", foreignKey: "movie_id" });
  language_movie.belongsTo(movies, { as: "movies", foreignKey: "movie_id" });
  languages.hasMany(language_movie, { as: "language_movie", foreignKey: "language_id" });
  language_movie.belongsTo(languages, { as: "languages", foreignKey: "language_id" });

  movies.hasMany(country_movie, { as: "country_movie", foreignKey: "movie_id" });
  country_movie.belongsTo(movies, { as: "movies", foreignKey: "movie_id" });
  countries.hasMany(country_movie, { as: "country_movie", foreignKey: "country_id" });
  country_movie.belongsTo(countries, { as: "countries", foreignKey: "country_id" });
  return {
    movies,
    episodes,
    actors,
    companies,
    genres,
    directors,
    languages,
    countries,
    actor_movie,
    company_movie,
    genre_movie,
    director_movie,
    language_movie,
    country_movie,
  };
}
const db = initModels();
module.exports = db;
