const router = require('express').Router();
const { User } = require('../db');

// send request to find all users
router.get('/', (req, res, next) => {
  User.findAll()
    .then(rows => res.send(rows));
})

router.post('/', (req, res, next) => {
  User.create(req.body);
})

module.exports = router;