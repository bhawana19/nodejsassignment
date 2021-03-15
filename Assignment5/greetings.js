const express = require('express');
const router = express.Router();

const greetController = require('../controllers/greetc');

router.get('/', greetController.getGreetingMessage);
module.exports = router; 