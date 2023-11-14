const path = require('path');

const express = require('express');
const multer = require('multer');

const profileController = require('../controllers/profile');

const upload = multer({ dest: './public/uploads/' })

const router = express.Router();

router.get('/', profileController.getProfile);
router.get('/add-song', profileController.getAddSong);
router.post('/post-song', upload.single('file'), profileController.postSong);

module.exports = router;