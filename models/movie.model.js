const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../utils/db");
const movies = sequelize.define(
  "movies",
  {
    movie_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    poster_url: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    trailer_url: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    view: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
    },
    vote_avg: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0,
    },
    vote_count: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
    },
    isSeries: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
    },
  },
  {
    sequelize,
    tableName: "movies",
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [{ name: "movie_id" }],
      },
    ],
  }
);

module.exports = movies;
