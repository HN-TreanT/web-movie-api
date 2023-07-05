const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../utils/db");
const genres = sequelize.define(
  "genres",
  {
    genre_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    genre_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },

  {
    sequelize,
    tableName: "genres",
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [{ name: "genre_id" }],
      },
    ],
  }
);

module.exports = genres;
