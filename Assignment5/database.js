const Sequelize = require('sequelize');
const sequelizeNodeJSDB = new Sequelize('nodejsdb', 'root', 'root', 
    {
        dialect: 'mysql',
        host: 'localhost'
    }
);
module.exports = sequelizeNodeJSDB;