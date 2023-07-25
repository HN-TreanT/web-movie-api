const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../utils/db");
const episodes = sequelize.define(
  "episodes",
  {
    episodes_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    movie_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "movies",
        key: "movie_id",
      },
    },
    episode: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    runtime: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    release_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    url_video: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  },

  {
    sequelize,
    tableName: "episodes",
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [{ name: "episodes_id" }],
      },
      {
        name: "episodes_movie_idfk",
        using: "BTREE",
        fields: [{ name: "movie_id" }],
      },
    ],
  }
);

module.exports = episodes;
