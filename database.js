const Sequelize = require('sequelize');

// const connectionUrl = 'postgres://siteviewer:pwd@188.166.235.78:5432/messages';
const connectionUrl = 'postgres://student:pwd@localhost:5432/concernsdbs';
const database = new Sequelize(connectionUrl);

module.exports = database;
