const express = require('express');
const router = express.Router();

const indexController = require('../controllers/index');

router.get('/', function (req, res, next) {
  res.setHeader('Content-Type', 'application/json')
  res.send(JSON.stringify({message:'Hello World'}))
});

module.exports = router;
