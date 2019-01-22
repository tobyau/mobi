// create and connect db 

const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost/mobi");
const UserModel = require('./user');

const User = UserModel(db, Sequelize);

// define relations 

db.sync().then(() => console.log('Tables Synced')).catch(err => console.error(err));

module.exports = {
  User
};