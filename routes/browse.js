const path = require('path');

const express = require('express');

const browseController = require('../controllers/browse');

const router = express.Router();

router.get('/', browseController.getHome);
router.get('/get-image-for-song/:songId', browseController.getImage);

module.exports = router;