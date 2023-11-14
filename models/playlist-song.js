const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const PlaylistSong = sequelize.define('playlistSong', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    }
});

module.exports = PlaylistSong;