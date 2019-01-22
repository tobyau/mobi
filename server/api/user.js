const Router = require('express').Router();
const { User } = require('../db/models');

// send request to find all users
Router.get('/', (req, res) => {
  User.findAll().then(rows => res.send(rows));
});

module.exports = Router;