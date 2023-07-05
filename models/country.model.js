const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../utils/db");
const countries = sequelize.define(
  "countries",
  {
    country_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    country_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },

  {
    sequelize,
    tableName: "countries",
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [{ name: "country_id" }],
      },
    ],
  }
);

module.exports = countries;
