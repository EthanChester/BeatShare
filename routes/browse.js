const path = require('path');

const express = require('express');

const browseController = require('../controllers/browse');

const router = express.Router();

router.get('/', browseController.getHome);

module.exports = router;