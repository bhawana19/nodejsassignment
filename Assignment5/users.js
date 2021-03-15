
const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersc');

router.get('/users', usersController.getUsername);

module.exports = router; 