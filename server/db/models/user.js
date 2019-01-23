const db = require("../db");
const Sequelize = require("sequelize");


const User = db.define("users", {
  firstname: { type: Sequelize.TEXT, allowNull: false },
  lastname: { type: Sequelize.TEXT, allowNull: false },
  username: { type: Sequelize.TEXT, allowNull: false },
  password: { type: Sequelize.TEXT, allowNull: false },
});

module.exports = User;