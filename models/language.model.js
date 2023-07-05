const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../utils/db");
const languages = sequelize.define(
  "languages",
  {
    language_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },

  {
    sequelize,
    tableName: "languages",
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [{ name: "language_id" }],
      },
    ],
  }
);

module.exports = languages;
