const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../utils/db");
const director_movie = sequelize.define(
  "director_movie",
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
    director_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "directors",
        key: "director_id",
      },
    },
  },

  {
    sequelize,
    tableName: "director_movie",
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [{ name: "id" }],
      },
      {
        name: "director_movie_idfk_1",
        using: "BTREE",
        fields: [{ name: "movie_id" }],
      },
      {
        name: "director_movie_idfk_2",
        using: "BTREE",
        fields: [{ name: "director_id" }],
      },
    ],
  }
);

module.exports = director_movie;
