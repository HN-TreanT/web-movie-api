const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../utils/db");
const companys = sequelize.define(
  "companys",
  {
    company_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    company_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },

  {
    sequelize,
    tableName: "companys",
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [{ name: "company_id" }],
      },
    ],
  }
);

module.exports = companys;
