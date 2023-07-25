const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../utils/db");
const language_movie = sequelize.define(
  "language_movie",
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
    language_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "languages",
        key: "language_id",
      },
    },
  },

  {
    sequelize,
    tableName: "language_movie",
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [{ name: "id" }],
      },
      {
        name: "language_movie_idfk_1",
        using: "BTREE",
        fields: [{ name: "movie_id" }],
      },
      {
        name: "language_movie_idfk_2",
        using: "BTREE",
        fields: [{ name: "language_id" }],
      },
    ],
  }
);

module.exports = language_movie;
