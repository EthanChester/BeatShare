const path = require('path');

const express = require('express');
const multer = require('multer');

const profileController = require('../controllers/profile');

const upload = multer({ dest: './public/uploads/' })

const router = express.Router();

router.get('/', profileController.getProfile);
router.get('/add-song/:albumId', profileController.getAddSong);
router.post('/post-song', upload.single('file'), profileController.postSong);
router.get('/create-release', profileController.getCreateRelease);
router.post('/post-release', upload.single('image'), profileController.postRelease);

module.exports = router;