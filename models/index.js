const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/config.json');

const sequelize = new Sequelize(
    config.development.database,
    config.development.username,
    config.development.password,
    {
        host: config.development.host,
        dialect: config.development.dialect,
    }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require('./user')(sequelize, DataTypes); // Подключение модели User

module.exports = db;