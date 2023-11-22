// User.js
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("login", "root", "0966314211", {
  host: "localhost",
  dialect: "mysql",
});

const User = sequelize.define("users", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = User;
