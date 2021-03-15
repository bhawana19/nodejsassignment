const express = require('express');
const router = express.Router();
const formController = require('../controllers/formc');

router.get('/create', formController.getUserForm);
router.post('/add', formController.postAddUsername);

module.exports = router; 