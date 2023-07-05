const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../utils/db");
const actor_movie = sequelize.define(
  "actor_movie",
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
    actor_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "actors",
        key: "actor_id",
      },
    },
  },

  {
    sequelize,
    tableName: "actor_movie",
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [{ name: "id" }],
      },
      {
        name: "actor_movie_idfk_1",
        using: "BTREE",
        fields: [{ name: "movie_id" }],
      },
      {
        name: "actor_movie_idfk_2",
        using: "BTREE",
        fields: [{ name: "actor_id" }],
      },
    ],
  }
);

module.exports = actor_movie;
