const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../utils/db");
const directors = sequelize.define(
  "directors",
  {
    director_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    director_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    gender: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
    },
  },

  {
    sequelize,
    tableName: "directors",
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [{ name: "director_id" }],
      },
    ],
  }
);

module.exports = directors;
