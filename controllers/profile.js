const Song = require('../models/song');
const Album = require('../models/album')

exports.getProfile = (req, res, next) => {
    res.render('profile/profile', {
        pageTitle: "Profile"
    });
}

exports.getAddSong = (req, res, next) => {
    const albumId = req.params.albumId;
    Album.findByPk(albumId)
    .then(album => {
        res.render('profile/addSong', {
            pageTitle: "Add Song",
            album: album
        });
    });
}

exports.postSong = (req, res, next) => {
    const title = req.body.title;
    const type = req.file.mimetype;
    const filename = req.file.filename;
    const albumId = req.body.albumId;
    Album.findByPk(albumId)
    .then(album => {
        album.createSong({
            title: title,
            filename: filename,
            filetype: type,
        })
        .then(() => res.redirect('/profile/create-release'))
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
}

exports.getCreateRelease = (req, res, next) => {
    res.render('profile/createRelease', {
        pageTitle: "Create Release"
    });
}

exports.postRelease = (req, res, next) => {
    console.log(req.file);
    const title = req.body.title;
    const type = req.file.mimetype;
    const image = req.file.filename;
    Album.create({
        title: title,
        image: image,
        imageType: type
    })
    .then(result => res.redirect('/profile/add-song/' + result.id))
    .catch(err => console.log(err));
}