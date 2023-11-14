const Sequelize = require('sequelize');

const sequelize = new Sequelize('beat-share', 'root', 'M1s*ql4ye', {
    dialect: 'mysql', 
    host: 'localhost'
});

module.exports = sequelize;