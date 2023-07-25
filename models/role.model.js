const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../utils/db");
const role = sequelize.define(
  "role",
  {
    role_id: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "role",
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [{ name: "role_id" }],
      },
    ],
  }
);

module.exports = role;
