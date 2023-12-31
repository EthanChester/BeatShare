const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Song = sequelize.define('song', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    duriation: {
        type: Sequelize.DOUBLE,
    },
    filename: {
        type: Sequelize.STRING,
        allowNull: false
    },
    filetype: {
        type: Sequelize.STRING,
        allowNull: false
    },
    albumPosition: {
        type: Sequelize.INTEGER
    }
});

module.exports = Song;