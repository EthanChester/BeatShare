const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Playlist = sequelize.define('playlist', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    imageURL: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Playlist;