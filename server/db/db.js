// create and connect db 

const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost/mobi");

module.exports = db;