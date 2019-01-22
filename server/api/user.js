const router = require('express').Router();
const { User } = require('../db');

// send request to find all users
router.get('/', async (req, res, next) => {
  const users = await User.findAll();
  res.send(users);
})

module.exports = router;