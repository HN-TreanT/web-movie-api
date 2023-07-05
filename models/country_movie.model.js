const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../utils/db");
const country_movie = sequelize.define(
  "country_movie",
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    movie_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "movies",
        key: "movie_id",
      },
    },
    country_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "countries",
        key: "country_id",
      },
    },
  },

  {
    sequelize,
    tableName: "country_movie",
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [{ name: "id" }],
      },
      {
        name: "country_movie_idfk_1",
        using: "BTREE",
        fields: [{ name: "movie_id" }],
      },
      {
        name: "country_movie_idfk_2",
        using: "BTREE",
        fields: [{ name: "country_id" }],
      },
    ],
  }
);

module.exports = country_movie;
