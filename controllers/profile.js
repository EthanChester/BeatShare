const Song = require('../models/song');

exports.getProfile = (req, res, next) => {
    res.render('profile/profile', {
        pageTitle: "Profile"
    });
}

exports.getAddSong = (req, res, next) => {
    res.render('profile/addSong', {
        pageTitle: "Add Song"
    })
}

exports.postSong = (req, res, next) => {
    const title = req.body.title;
    const type = req.file.mimetype;
    const filename = req.file.filename;
    Song.create({
        title: title,
        filename: filename,
        filetype: type
    })
    res.redirect('/');
}