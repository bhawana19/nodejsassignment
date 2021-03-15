const Sequelize = require('sequelize');

const sequelizeNodeJSDB = require('../util/database');

const Usersnames = sequelizeNodeJSDB.define('usernames', {

    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    user:{
        type: Sequelize.STRING,
        allowNull: false,
        autoIncrement: false
    }
});

module.exports = Usersnames;