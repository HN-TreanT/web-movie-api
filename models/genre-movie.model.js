const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../utils/db");
const genre_movie = sequelize.define(
  "genre_movie",
  {
    id: {
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
    genre_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "genres",
        key: "genre_id",
      },
    },
  },

  {
    sequelize,
    tableName: "genre_movie",
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [{ name: "id" }],
      },
      {
        name: "genre_movie_idfk_1",
        using: "BTREE",
        fields: [{ name: "movie_id" }],
      },
      {
        name: "genre_movie_idfk_2",
        using: "BTREE",
        fields: [{ name: "genre_id" }],
      },
    ],
  }
);

module.exports = genre_movie;
