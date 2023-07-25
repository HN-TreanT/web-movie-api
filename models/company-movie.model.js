const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../utils/db");
const company_movie = sequelize.define(
  "company_movie",
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
    company_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "companys",
        key: "company_id",
      },
    },
  },

  {
    sequelize,
    tableName: "company_movie",
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [{ name: "id" }],
      },
      {
        name: "company_movie_idfk_1",
        using: "BTREE",
        fields: [{ name: "movie_id" }],
      },
      {
        name: "company_movie_idfk_2",
        using: "BTREE",
        fields: [{ name: "company_id" }],
      },
    ],
  }
);

module.exports = company_movie;
