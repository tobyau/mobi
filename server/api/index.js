const Router = require('express').Router();
const User =  require('./user');

// use user route 
Router.use('/user', User);

module.exports = Router;