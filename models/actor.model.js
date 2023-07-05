const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../utils/db");
const actors = sequelize.define(
  "actors",
  {
    actor_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    actor_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    gender: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
    avartar: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  },

  {
    sequelize,
    tableName: "actors",
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [{ name: "actor_id" }],
      },
    ],
  }
);

module.exports = actors;
