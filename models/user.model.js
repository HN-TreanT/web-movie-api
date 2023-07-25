const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../utils/db");
const users = sequelize.define(
  "users",
  {
    user_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    role_id: {
      type: DataTypes.STRING(10),
      allowNull: false,
      references: {
        model: "role",
        key: "role_id",
      },
    },
    refresh_token: {
      type: DataTypes.STRING(500),
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "users",
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [{ name: "user_id" }],
      },
      {
        name: "user_ibfk_1",
        using: "BTREE",
        fields: [{ name: "role_id" }],
      },
    ],
  }
);

module.exports = users;
