const Song = require('../models/song');
const Album = require('../models/album');

exports.getHome = (req, res, next) => {
    Song.findAll()
        .then(songs => {
            Album.findAll()
            .then(albums => {
                res.render('browse/home', {
                    pageTitle: "Home",
                    songs: songs,
                    albums: albums
                });
            })
        })
        .catch(err => console.log(err));
}

exports.getImage = (req, res, next) => {
    const songId = req.params.songId;
    Song.findByPk(songId)
    .then(song => {
        song.getAlbum()
        .then(album => {
            res.end(album.image);
        })
    })
}