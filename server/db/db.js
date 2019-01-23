// create and connect db 

const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost/mobi");

// take out force true
db.sync()
    .then(() => console.log("tables created!"))
    .catch(err => console.error(err));

module.exports = db;